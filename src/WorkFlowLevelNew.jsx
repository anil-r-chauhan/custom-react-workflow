import React from "react";
import { Box, Container, Card, CardHeader, CardActions, CardContent, TextField, Divider, Switch, Typography, Autocomplete, List, ListItem, ListItemText, IconButton, Tooltip, Button, ListItemAvatar, ListItemButton, Avatar, Stack, Popover, Checkbox, Chip, Collapse } from '@mui/material';
import {DragIndicator as DragIndicatorIcon,RemoveCircle as RemoveCircleIcon,ExpandMore as ExpandMoreIcon,Edit as EditIcon,Add as AddIcon,Delete as DeleteIcon} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import _ from "lodash"


const RenderWorkflowLevels = ({
    levelEl,
    // visible,
    // setVisible,
    selectedApproverList,
    setSelectedApproverList,
    // currentLevel,
    // setCurrentLevel,
    // handleClick,
    // id,
    // PopoverOpen,
    // anchorPopover,
    // setAnchorPopover,
    // handleClose,
    // popoverList,
    // setPopoverList,
    // getPopoverListItem,
    // open,
    // setOpen,
    // handleExpandClick,
    // allSelectedUsers,
    // setAllSelectedUsers,
    // getPopoverData
    ApproverData
}) => {
    const editLevelFieldRef = React.useRef()
    const [levelNameVal, setLevelNameVal] = React.useState(`Level ${levelEl.level}`)
    const [visible, setVisible] = React.useState(false);
    const [anchorPopover, setAnchorPopover] = React.useState(null);
    const PopoverOpen = Boolean(anchorPopover);
    const id = PopoverOpen ? 'simple-popover' : undefined;
    const [open, setOpen] = React.useState(true);
    const [currentLevel, setCurrentLevel] = React.useState(null)
    const [allSelectedUsers, setAllSelectedUsers] = React.useState([])
    const [popoverList, setPopoverList] = React.useState([])
    const [isDuplicateLevelName, setIsDuplicateLevelName] = React.useState(false)
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
    }));

    const handleClick = (event) => {
        setAnchorPopover(event.currentTarget);
        // getPopoverData()
    };
    const handleClose = () => {
        setAnchorPopover(null);
        setCurrentLevel(null)
    };
    const handleExpandClick = () => {
        setOpen(!open);
    };

    // for level name update
    React.useEffect(() => {
        if(!visible) {
            let selectedIndex = selectedApproverList.length>0 && selectedApproverList.findIndex(el => el.level == levelEl.level)
            let tempState = [...selectedApproverList]
            let tempLevelName = selectedApproverList[selectedIndex].levelName
            tempLevelName = levelNameVal
            tempState[selectedIndex].levelName = tempLevelName
            setSelectedApproverList(tempState)
        }
    },[visible])

    // action on level-update, to get available and selected user in popover for that level
    React.useEffect(() => {
        console.log('ONn CHANGE currentLevel', currentLevel)
        if(currentLevel == null) {
            setAllSelectedUsers([])
        } else getPopoverData()
    }, [currentLevel])

    // update popover list on close-of-popover/change in allselecteduser
    React.useEffect(() => {
        // console.log('ON CHANGE allSelectedUser',allSelectedUsers)
        setPopoverList(ApproverData.approvers.filter(el => !allSelectedUsers.includes(el.id)))
    },[allSelectedUsers])


    // get popover data for specific level
    const getPopoverData = () => {
        setAllSelectedUsers([])
        setPopoverList([])
        let tempArr = []
        selectedApproverList.map(el => {
            // if(el.level != currentLevel) {
            if(el.level != levelEl.level) {
                console.log('getPopoverData ONN CHANGE selectedApproverList element', el)
                tempArr = [...tempArr, ...el.userList]
                tempArr = _.uniq(tempArr);
                console.log('getPopoverData ONN CHANGE tempArrrrrrrrrrrrrrrrrrrrr',tempArr)
            }
        })
        setAllSelectedUsers(tempArr)
        setPopoverList(ApproverData.approvers.filter(el => !allSelectedUsers.includes(el.id)))
        // console.log('ONN CHANGE ALL SELECTED USERS ', allSelectedUsers)
    }

    // ui for popover data
    const getPopoverListItem = (element) => {
        return <ListItem key={element.id} 
            alignItems="flex-start" 
            // selected={(selectedApproverList[levelEl.level-1] && selectedApproverList[levelEl.level-1].userList.indexOf(element.id) != -1) ? true : false}
            selected={
                (selectedApproverList.findIndex(el => el.level == levelEl.level) != -1 && 
                selectedApproverList[selectedApproverList.findIndex(el => el.level == levelEl.level)].userList.indexOf(element.id) != -1) 
                ? true :false
            }
        >
            <ListItemButton
                onClick={() => handleListSelection(element.id)} 
            >
                <ListItemAvatar>
                    <Avatar alt={element.name} src="/static/images/avatar/1.jpg"
                        sx={{
                            '&.MuiAvatar-root':{fontSize:'14px', fontWeight:'500'}
                        }}
                    />
                </ListItemAvatar>
                <ListItemText
                    primary={element.name}
                    secondary={
                        <Typography
                            className="mailId"
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {element.email}
                        </Typography>                                                        
                    }
                />
            </ListItemButton>
        </ListItem>
    }

    // update usrelist on select/desselecting user in popover
    const handleListSelection = (elementId) => {
        // console.log('in handleListSelection -- elementId',elementId)
        let selectedIndex = selectedApproverList.length>0 && selectedApproverList.findIndex(el => el.level == levelEl.level)
        // console.log('in handleListSelection -- selectedIndex',selectedIndex)
        if(selectedIndex != -1) {
            if(selectedApproverList[selectedIndex].userList && selectedApproverList[selectedIndex].userList.indexOf(elementId) != -1) {
                // console.log('in handleListSelection -- elementId in userlist',selectedApproverList[selectedIndex].userList.indexOf(elementId))
                let tempState = [...selectedApproverList]
                let tempList = selectedApproverList[selectedIndex]?.userList
                let selectedEl = tempList.splice(tempList.indexOf(elementId),1)
                tempList = tempList.filter(el => !selectedEl.includes(el))
                tempState[selectedIndex].userList = tempList
                setSelectedApproverList(tempState)
                // getPopoverData()
                // setSelectedApproverList(prevState => prevState.filter(el => !prevState[selectedIndex]?.userList.splice(prevState[selectedIndex]?.userList.indexOf(elementId),1).includes(el)))
                // console.log('handleListSelection after --- ', selectedApproverList)
            } else if(selectedApproverList[selectedIndex].userList && selectedApproverList[selectedIndex].userList.indexOf(elementId) == -1) {
                // console.log('in handleListSelection -- elementId not in userlist',selectedApproverList[selectedIndex].userList.indexOf(elementId))
                let tempState = [...selectedApproverList]
                let tempList = selectedApproverList[selectedIndex]?.userList
                // let selectedEl = tempList.splice(tempList.indexOf(elementId),1)
                // tempList = tempList.filter(el => !selectedEl.includes(el))
                tempList = [...tempList, elementId]
                tempState[selectedIndex].userList = tempList
                setSelectedApproverList(tempState)
                // getPopoverData()
                // setSelectedApproverList(prevState => prevState[selectedIndex]?.userList.concat(elementId))
                // console.log('handleListSelection after --- ', selectedApproverList)
            }
        }
    }

    const removeSelectedUser = (event, element) => {
        // console.log('removing user....... event',event, element, levelEl)
        let selectedIndex = selectedApproverList.length>0 && selectedApproverList.findIndex(el => el.level == levelEl.level)

        let tempState = [...selectedApproverList]
        let tempList = selectedApproverList[selectedIndex]?.userList
        let selectedEl = tempList.splice(tempList.indexOf(element.id),1)
        tempList = tempList.filter(el => !selectedEl.includes(el))
        tempState[selectedIndex].userList = tempList
        setSelectedApproverList(tempState)
    }

    const delLevel = () => {
        if(selectedApproverList.length <3) return;
        let SelectedIndex = selectedApproverList.length>0 && selectedApproverList.findIndex(el => el.level == levelEl.level)
        let tempState = selectedApproverList
        let tempList = selectedApproverList[SelectedIndex].userList
        let removedEl = tempState.splice(SelectedIndex,1)
        tempState = tempState.filter(el => !removedEl.includes(el))
        setSelectedApproverList(tempState)
        getPopoverData()
    }


    return <Card sx={{boxShadow:'none'}}>
                <CardActions sx={{p:0}}>
                    <Box className="CardLevel">
                        <Box  className="card-level-head">                                        
                            <Box className="level-title" 
                                onClick={() => setVisible(true)}
                            >
                                <Typography
                                    sx={{
                                        fontSize:'14px', 
                                        fontWeight:'600',
                                        textTransform:'uppercase',
                                        color:'var(--grey-800)'
                                    }}                                            
                                >
                                    {levelEl.levelName}
                                </Typography>                            
                                <EditIcon fontSize="inherit" sx={{marginLeft:'auto', color:'var(--grey-500)'}}/>
                            </Box>
                            {visible && 
                                <Box className="level-edit-box">
                                    <TextField 
                                        ref={editLevelFieldRef}
                                        focused
                                        autoFocus
                                        label="" 
                                        variant="outlined" 
                                        size="small"
                                        value={levelNameVal}
                                        onChange={(e) => {
                                            setLevelNameVal(e.target.value)
                                            let levelNames = []
                                            selectedApproverList.forEach(element => {
                                                if(element.levelName != levelEl.levelName) {
                                                    levelNames = [...levelNames, element.levelName.toLowerCase()]
                                                }
                                            });
                                            if(levelNames.includes(e.target.value.toLowerCase())) {
                                                setIsDuplicateLevelName(true)
                                            } else setIsDuplicateLevelName(false)
                                        }}
                                        onKeyDown={(e) => {
                                            if(e.key == "Enter") {
                                                if(levelNameVal.length<1 || isDuplicateLevelName) {
                                                    editLevelFieldRef.current.focus()
                                                    return;
                                                }
                                                editLevelFieldRef.current.blur()
                                                setVisible(false)
                                            }
                                        }}
                                        onBlur={(e) => {
                                            if(levelNameVal.length<1 || isDuplicateLevelName) return;
                                            setVisible(false)
                                        }}
                                        error={visible && (levelNameVal.length<1 || isDuplicateLevelName)}
                                        helperText={visible && (levelNameVal.length<1 ? "Level Name Can't Be Empty" : isDuplicateLevelName ? "Level Name Can't Be Duplicate" : "")}
                                    />                                                
                                </Box>
                            }
                        </Box>
                        
                        <Box className="card-level-tools">
                            <Chip 
                                color="error" 
                                icon={<AddIcon />} 
                                label={selectedApproverList[selectedApproverList.findIndex(el => el.level == levelEl.level)].userList.length || 0}
                                size="small" 
                                className="level-info-badge"  
                            />                                        
                            {selectedApproverList.length>2 && <IconButton color={'error'} aria-label="edit" size="small" sx={{marginRight:'5px', marginLeft:'-5px'}} 
                                onClick={delLevel}
                            >
                                <DeleteIcon fontSize="small" />
                            </IconButton>}
                            <Button 
                                variant="outlined" 
                                onClick={(e) => {
                                    setCurrentLevel(levelEl.level)
                                    handleClick(e)
                                }}
                                startIcon={<AddIcon/>} 
                                size="small" 
                                className="approve-btn"
                            >
                                <Typography variant="span" sx={{display : { xs: 'none', md: 'block' }}}>Add Approver</Typography>
                            </Button>
                            <Popover
                                id={id}
                                open={PopoverOpen}
                                anchorEl={anchorPopover}
                                onClose={handleClose}
                                sx={{
                                    '&.MuiPopover-root .MuiPaper-root':{
                                    boxShadow:'0px 0px 7px 1px rgb(0 0 0 / 20%)'}
                                }}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                <Box className="Level-ApprovDtl Popover-ApprovDtl" sx={{padding:'16px'}}>
                                    <Typography variant="h6" sx={{fontSize:"16px", fontWeight:'500', mb:2}}>Select Approvers</Typography>
                                    <TextField id="outlined-search" label="Search..." type="search" size="small" sx={{mb:1, width:'330px'}} />
                                    <List sx={{overflow:'auto', height:'200px'}}>
                                        {popoverList && popoverList.map((element, i) => {
                                            return getPopoverListItem(element,levelEl.level)
                                        })}
                                    </List>
                                </Box>
                            </Popover>

                            <ExpandMore
                                expand={open}
                                onClick={handleExpandClick}
                                aria-expanded={open}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon small="small"/>
                            </ExpandMore>                          
                        </Box>
                    </Box>

                </CardActions>

                <Collapse 
                    in={open} 
                    timeout="auto" unmountOnExit className="Level-CardBox" sx={{paddingLeft:'8px', paddingRight:'8px'}}
                >
                    <CardContent className="Level-ApprovDtl">
                        {ApproverData.approvers.map((element, i) => {
                            // if((selectedApproverList && selectedApproverList[levelEl.level-1]?.userList) && selectedApproverList[levelEl.level-1]?.userList?.indexOf(element.id) != -1) {
                            if((selectedApproverList.findIndex(el => el.level == levelEl.level) != -1 && 
                            selectedApproverList[selectedApproverList.findIndex(el => el.level == levelEl.level)].userList.length>0) &&
                            selectedApproverList[selectedApproverList.findIndex(el => el.level == levelEl.level)].userList.indexOf(element.id) != -1) {
                                return <List key={element.id}>
                                <ListItem alignItems="flex-start">
                                    <IconButton aria-label="" size="small" sx={{pl:0}}>
                                        <DragIndicatorIcon />
                                    </IconButton>

                                    <ListItemAvatar>
                                        <Avatar alt={element.name} src="/static/images/avatar/1.jpg"/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={element.name}                                        
                                    />
                                    
                                    <Tooltip title="Remove">
                                        <IconButton 
                                            aria-label=""
                                            color={'error'}
                                            onClick={(event) => removeSelectedUser(event, element)} 
                                        >
                                            <RemoveCircleIcon />
                                        </IconButton>
                                    </Tooltip>
                                </ListItem>
                            </List>
                            }
                        })}
                    </CardContent>
                </Collapse>
            </Card>
}

export default RenderWorkflowLevels