import * as React from 'react';
import { Box, Container, Card, CardHeader, CardActions, CardContent, TextField, Divider, Switch, Typography, Autocomplete, List, ListItem, ListItemText, IconButton, Tooltip, Button, ListItemAvatar, ListItemButton, Avatar, Stack, Popover, Checkbox, Chip,Unstable_Grid2 as Grid } from '@mui/material';
// import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { styled } from '@mui/material/styles';
import Workflow from './sdk';
// import {FormatSize} from '../../theme/SvgIcon/SvgIcon';

const PageToolbar = styled('div')(({theme}) => ({   
  background: '#ffffff',
  position: 'sticky',
  //top: 'var(--headerHeight)',
  top: '0',
  width: '100%',
  minHeight: '55px',
  padding: '10px 16px',
  zIndex:'99'
}));


const label = { inputProps: { 'aria-label': 'Switch demo' } };

const DocumentOption = [
    { label: 'PO Line Item' },
    { label: 'Externa Inspection' },
]

const CategorySelect = [
    { title: 'Rakesh PR Category' },
    { title: 'Mobile'},
    { title: 'Mobile_Client'},
    { title: 'Raw Material'},
    { title: 'Annexure 2.5MT'},
];

const PPBagsSelect = [
    { title: 'LLP Bags' },
    { title: 'PP Bags'},
    { title: 'Other'},
];

const PlantSelect = [
    { title: 'Ahmedabad' },
    { title: 'Jaipur'},
    { title: 'Mumbai'},
    { title: 'Surat'},
];

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

export const  WorkFlowform = (props) => {
    const [open, setOpen] = React.useState(true);
    const [documentOptions, setDocumentOptions] = React.useState([]);
    const [docSelected, setDocSelected] = React.useState({});

    const [docRulesFields, setDocRulesFields] = React.useState([])
    const [jsxRulesFields, setJsxRulesFields] = React.useState([])

    const Newform = new Workflow();

    React.useEffect(() => {
        setDocumentOptions(props.NewData.document)
        setDocSelected(props.NewData?.document[0])
        // getFields(docSelected)
    },[])
    React.useEffect(() => {
        // console.log('docRulesFields111',docSelected, docRulesFields, jsxRulesFields)
    },[docSelected, docRulesFields, jsxRulesFields])
    React.useEffect(() => {
            // console.log('in timeout...........docSelected changed',docSelected, docRulesFields, jsxRulesFields)
            getFields(docSelected)
    }, [docSelected])
    React.useEffect(() => {
        docRulesFields?.map((element,i) => {
            let tempoptionList = []
            if(element.condition_type == 'in') {
                let tempoptionListArr = docRulesFields.filter(d => d.id == element.id)
                tempoptionList = tempoptionListArr[0].optionList
                // console.log(docRulesFields.filter(d => d.id == element.id),tempoptionList,element.id)
            }
            if(element.visible) {
                setJsxRulesFields(prevState => [...prevState,
                    element.condition_type == 'equal'
                        ? <Grid key={element.id} xs={12} md={12}>
                                <Typography className="TextLabel">{element?.label}</Typography>
                                <TextField  id={element.id} defaultValue="" placeholder={element?.label} fullWidth size="small" />  
                            </Grid>
                        : <Grid key={element.id} xs={12} md={12}>
                                <Typography className="TextLabel">{element?.label}</Typography>
                                <Autocomplete
                                    multiple
                                    limitTags={2}
                                    id={element.id}
                                    options={tempoptionList || []}
                                    getOptionLabel={(option) => option.label ? option?.label : option.name ? option?.name : ''}
                                    // defaultValue={[CategorySelect[3], CategorySelect[2], CategorySelect[4]]}
                                    renderInput={(params) => (
                                    <TextField {...params} label="" placeholder="" />
                                    )}
                                    fullWidth
                                    size="small"
                                />
                            </Grid>
                ])
            }
        })
    }, [docRulesFields])
    const getFields = () => {
        setJsxRulesFields([])
        setDocRulesFields([])
        if(docSelected && docSelected.rules_attributes) {
            docSelected.rules_attributes.map((element, i) => {
                element.condition_type == 'equal' ?
                setDocRulesFields(prevState => [
                    ...prevState, {
                        "id": element.id,
                        "label": element.label,
                        "visible": element.visible,
                        "condition_type": element.condition_type,
                        "value" : ""
                    }
                ])
                :element.condition_type == 'in' && setDocRulesFields(prevState => [
                        ...prevState, {
                            "id": element.id,
                            "label": element.label,
                            "visible": element.visible,
                            "condition_type": element.condition_type,
                            "value" : "",
                            "optionList" : element.value ? element?.value : []
                        }
                    ])
            });            
            // console.log('set -- jsxrulesfield',docSelected, docRulesFields, jsxRulesFields)

        } else {setDocRulesFields([])}
        // console.log('set -- docRulesFields',docSelected, docRulesFields, jsxRulesFields)
        
    }


    const handleExpandClick = () => {
        setOpen(!open);
    };    

    //popover
    const [anchorPopover, setAnchorPopover] = React.useState(null);

  
  
    const PopoverOpen = Boolean(anchorPopover);
    const id = PopoverOpen ? 'simple-popover' : undefined;
    //end popover 

    const [visible, setVisible] = React.useState(false);
    const obj1 = {"level":1, "levelName": "Level 1", "userList":[]}
    const obj2 = {"level":2, "levelName": "Level 2", "userList":[]}
    const [selectedApproverList, setSelectedApproverList] = React.useState([obj1, obj2])
    const [allSelectedUsers, setAllSelectedUsers] = React.useState([])
    const [currentLevel, setCurrentLevel] = React.useState(1)
    const [popoverList, setPopoverList] = React.useState([])
    React.useEffect(() => {
        console.log('selectedApproverList on change', selectedApproverList)
    }, [selectedApproverList])
    const handleClick = (event) => {
        setAnchorPopover(event.currentTarget);
        // getPopoverData()
    };
    const handleClose = () => {
        setAnchorPopover(null);
        // setPopoverList(ApproverData.approvers.filter(el => !allSelectedUsers.includes(el.id)))
        setCurrentLevel(null)
        // getPopoverData()
    };
    const getPopoverListItem = (element) => {
        // console.log('selectedApproverList[level-1]?.userList',selectedApproverList[level-1]?.userList)
        // console.log('on click of popover list', element)
        return <ListItem key={element.id} 
            alignItems="flex-start" 
            // selected={selectedApproverList.indexOf(element.id) != -1 ? true : false}
        >
            <ListItemButton onClick={() => handleListSelection(element.id)} >
                <ListItemAvatar>
                    <Avatar alt={element.name} src="/static/images/avatar/1.jpg" />
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
    React.useEffect(() => {
        // console.log('ON CHANGE allSelectedUser',allSelectedUsers)
        setPopoverList(props.ApproverData.approvers.filter(el => !allSelectedUsers.includes(el.id)))
    },[allSelectedUsers])
    React.useEffect(() => {
        // console.log('ON CHANGE currentLevel', currentLevel)
        if(currentLevel == null) {
            setAllSelectedUsers([])
        } else getPopoverData()
    }, [currentLevel])
    let caller = () => {
        popoverList.map((element, i) => {
            return getPopoverListItem(element,1)
        })
    }
    React.useEffect(() => {
        console.log('ON CHANGE renderrrrr',popoverList)
    }, [popoverList])
    const getPopoverData = () => {
        setAllSelectedUsers([])
        setPopoverList([])
        let tempArr = []
        selectedApproverList.map(el => {
            if(el.level != currentLevel) {
                console.log('ON CHANGE selectedApproverList element', el)
                tempArr = [...allSelectedUsers, ...el.userList]
                tempArr = [...new Set(tempArr)]
                console.log('ON CHANGE tempArrrrrrrrrrrrrrrrrrrrr',tempArr)
                setAllSelectedUsers(tempArr)
            }
        })
        setPopoverList(props.ApproverData.approvers.filter(el => !allSelectedUsers.includes(el.id)))
        // console.log('ON CHANGE ALL SELECTED USERS ', allSelectedUsers)
    }

    const handleListSelection = (elementId) => {
        console.log('on click for selection,...', elementId, currentLevel)
        let selectedIndex = selectedApproverList.length>0 && selectedApproverList.findIndex(el => el.level == currentLevel)
        if(selectedIndex != -1) {
            // if(selectedApproverList[selectedIndex]?.userList) {
            //     console.log('userList available', selectedApproverList[selectedIndex]?.userList)
                if(selectedApproverList[selectedIndex]?.userList.indexOf(elementId) != -1) {
                    console.log('element available in userList', selectedApproverList[selectedIndex]?.userList.indexOf(elementId))
                    let tempState = [...selectedApproverList]
                    let tempList = selectedApproverList[selectedIndex]?.userList
                    let selectedEl = tempList.splice(tempList.indexOf(elementId),1)
                    tempList = tempList.filter(el => !selectedEl.includes(el))
                    tempState[selectedIndex].userList = tempList
                    setSelectedApproverList(tempState)
                    // getPopoverData()
                    // setSelectedApproverList(prevState => prevState.filter(el => !prevState[selectedIndex]?.userList.splice(prevState[selectedIndex]?.userList.indexOf(elementId),1).includes(el)))
                    console.log('after --- ', selectedApproverList)
                } else if(selectedApproverList[selectedIndex]?.userList.indexOf(elementId) == -1) {
                    console.log('element is not available in userList', selectedApproverList[selectedIndex]?.userList.indexOf(elementId))
                    let tempState = [...selectedApproverList]
                    let tempList = selectedApproverList[selectedIndex]?.userList
                    // let selectedEl = tempList.splice(tempList.indexOf(elementId),1)
                    // tempList = tempList.filter(el => !selectedEl.includes(el))
                    tempList = [...tempList, elementId]
                    tempState[selectedIndex].userList = tempList
                    setSelectedApproverList(tempState)
                    // getPopoverData()
                    // setSelectedApproverList(prevState => prevState[selectedIndex]?.userList.concat(elementId))
                    console.log('after --- ', selectedApproverList)
                }
            // } else {
            //     console.log('userList is not available', selectedApproverList[selectedIndex]?.userList)
            //     // let tempState = selectedApproverList
            //     // // let tempList = selectedApproverList[selectedIndex]?.userList
            //     // let tempList = []
            //     // // let selectedEl = tempList.splice(tempList.indexOf(elementId),1)
            //     // // tempList = tempList.filter(el => !selectedEl.includes(el))
            //     // tempList = [...tempList, elementId]
            //     // tempState[selectedIndex].userList = tempList
            //     // // setSelectedApproverList(tempState)
            //     setSelectedApproverList(prevState => prevState[selectedIndex]?.userList.push(elementId))
            //     console.log('after --- ', selectedApproverList)
            // }
        } else {
            let newLevel = selectedApproverList[selectedApproverList.length-1].level +1
            setSelectedApproverList(prevState => [...prevState, {"level" : newLevel}])
            setAllSelectedUsers()
        }
    }

    const addLevel = () => {
        const newLevelNo = selectedApproverList[selectedApproverList.length-1].level+1
        // let tempSelectedApproverList = [...selectedApproverList, {"level":newLevelNo, "userList":[]}]
        let tempSelectedApproverList = [...selectedApproverList, {"level":newLevelNo, "levelName": `Level ${newLevelNo}`, "userList":[]}]
        setSelectedApproverList(tempSelectedApproverList)
    }

    return(
        <React.Fragment>
            <main style={{
                width: '100%',
                maxWidth: '100%',      
                }}>
                <PageToolbar className="datagrid-PageToolbar head-datagrid-toolbar">
                    <Stack spacing={2} direction="row" alignItems={"center"}>
                        <Typography className='app-pagetitle'>
                            Workflow
                        </Typography>

                        <Stack direction="row" alignItems={"center"} ml={'auto !important'}>
                            <Button variant="outlined" sx={{mr:2}} size='small'>Cancle</Button>
                            <Button variant="contained" size='small'>Submit</Button>            
                        </Stack>
                    </Stack>
                </PageToolbar>        

                <Container maxWidth="md" sx={{mt:5, mb:5}}>
                    <Box className="workflow-details">
                        <Card variant="outlined">
                            <CardContent>
                                <Box
                                    components="form"   
                                    className="form-wrapper"                                                     
                                >
                                    <Grid container  spacing={2}  sx={{alignItems:'center', mt:1}}>
                                        <Grid xs={12} sm={8} md={6}>
                                            <Box sx={{display:'flex', alignItems:'center'}}>
                                                {/* <FormatSize sx={{marginRight:'5px', color:'var(--bluegrey-600)' }}/> */}
                                                <TextField required  id="outlined-required" label="Workflow Title" defaultValue="PP Bags Flow" fullWidth size="small" />
                                            </Box>
                                        </Grid>
                                        <Grid xs={12} sm={4} md={6}>
                                            <Box sx={{display:'flex', alignItems:'center', justifyContent:'end'}}>
                                                <Typography variant="span" sx={{fontWeight:500, fontSize:'14px', marginRight:'10px'}}>Active</Typography>
                                                <Switch {...label} />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    
                                    <Divider sx={{mt:3, mb:3}}/>

                                    <Grid container spacing={2} sx={{alignItems:'center'}}>
                                        {false && <Grid xs={12} sm={6} md={4}>
                                            <Typography className="TextLabel">Company Name</Typography>
                                            <TextField required  id="outlined-required" defaultValue="Ahm_VendX_Live" fullWidth size="small" />                                    
                                        </Grid>}
                                        <Grid xs={12} sm={6} md={4}>
                                            <Typography className="TextLabel">Document</Typography>
                                            <Autocomplete
                                                disablePortal
                                                id="document"
                                                options={documentOptions}
                                                value={docSelected}
                                                onChange={(e, val) => {
                                                    setDocSelected(val)
                                                    // getFields()
                                                }}
                                                getOptionLabel={(option) => option.label ? option?.label : ''}
                                                renderInput={(params) => <TextField {...params} label="" />}
                                                fullWidth 
                                                size="small"
                                            />
                                        </Grid>
                                        <Grid xs={12} sm={6} md={4}>
                                            &nbsp;
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={2} sx={{alignItems:'center', mt:2}}>
                                        <Grid xs={12} sm={12} md={12}>
                                            <Typography className="TextLabel">Description</Typography>
                                            <TextField
                                                id="description"
                                                label=""
                                                multiline
                                                rows={2}
                                                placeholder="Add Description here"
                                                defaultValue=""
                                                fullWidth 
                                                sx={{
                                                    '& .MuiInputBase-root':{padding:'13px'}                                            
                                                }}
                                            />                                    
                                        </Grid>
                                    </Grid>
                                    
                                </Box>
                            </CardContent>
                        </Card>

                        <Card variant="outlined" sx={{mt:2}}>
                            <CardHeader                        
                                title="Rules"
                                className="CardHeader"
                            />
                            <Divider />
                            <CardContent>
                                <Box
                                    components="form"   
                                    className="form-wrapper"                                                     
                                >
                                    <Grid container spacing={2} sx={{alignItems:'center'}}>
                                        
                                        {/* {jsxRulesFields.map((el,i) => el)} */}
                                        {Newform.draw({...props,jsxRulesFields})} 

                                        {/* <Grid xs={12} md={12}>
                                            <Typography className="TextLabel">Category</Typography>
                                            <Autocomplete
                                                multiple
                                                limitTags={2}
                                                id="multiple-limit-tags"
                                                options={CategorySelect}
                                                getOptionLabel={(option) => option.title}
                                                defaultValue={[CategorySelect[3], CategorySelect[2], CategorySelect[4]]}
                                                renderInput={(params) => (
                                                <TextField {...params} label="" placeholder="" />
                                                )}
                                                fullWidth
                                                size="small"
                                            />
                                        </Grid>                                 */}

                                        {/* <Grid xs={12} md={12}>
                                            <Typography className="TextLabel">PP Bags</Typography>
                                            <Autocomplete
                                                multiple
                                                limitTags={2}
                                                id="multiple-limit-tags"
                                                options={PPBagsSelect}
                                                getOptionLabel={(option) => option.title}
                                                defaultValue={[PPBagsSelect[1], PPBagsSelect[2]]}
                                                renderInput={(params) => (
                                                <TextField {...params} label="" placeholder="" />
                                                )}
                                                fullWidth
                                                size="small"
                                            />
                                        </Grid> */}

                                        {/* <Grid xs={12} md={12}>
                                            <Typography className="TextLabel">Plant</Typography>
                                            <Autocomplete
                                                multiple
                                                limitTags={2}
                                                id="multiple-limit-tags"
                                                options={PlantSelect}
                                                getOptionLabel={(option) => option.title}
                                                defaultValue={[PlantSelect[1], PlantSelect[2]]}
                                                renderInput={(params) => (
                                                <TextField {...params} label="" placeholder="" />
                                                )}
                                                fullWidth
                                                size="small"
                                            />
                                        </Grid> */}
                                        
                                        {/* <Grid xs={12} md={6}>
                                            <Typography className="TextLabel">Material Group</Typography>
                                            <TextField required  id="outlined-required" defaultValue="" placeholder="material group" fullWidth size="small" />  
                                        </Grid> */}

                                        {/* <Grid xs={12} md={6}>
                                            <Typography className="TextLabel">PO Doc Type</Typography>
                                            <TextField required  id="outlined-required" defaultValue="" placeholder="doc type name" fullWidth size="small" />  
                                        </Grid> */}

                                    </Grid>
                                </Box>                                             
                            </CardContent>
                        </Card>

                        <Card variant="outlined" sx={{mt:2}}>
                            <CardHeader                        
                                title="Levels"
                                className="CardHeader"                        
                            />
                            <Divider />
                            <CardContent>

                                {/* <RenderWorkflowLevels/> */}
                                {/* {selectedApproverList.map(el => (
                                    <RenderWorkflowLevels key={el.level} 
                                            levelEl={el}
                                            // visible = {visible}
                                            // setVisible = {setVisible}
                                            selectedApproverList = {selectedApproverList}
                                            setSelectedApproverList = {setSelectedApproverList}
                                            ApproverData={props.ApproverData}
                                            // currentLevel = {currentLevel}
                                            // setCurrentLevel = {setCurrentLevel}
                                            // handleClick = {handleClick}
                                            // id = {id}
                                            // PopoverOpen = {PopoverOpen}
                                            // anchorPopover = {anchorPopover}
                                            // setAnchorPopover = {setAnchorPopover}
                                            // handleClose = {handleClose}
                                            // popoverList = {popoverList}
                                            // setPopoverList = {setPopoverList}
                                            // getPopoverListItem = {getPopoverListItem}
                                            // open = {open}
                                            // setOpen = {setOpen}
                                            // handleExpandClick = {handleExpandClick}
                                            // allSelectedUsers = {allSelectedUsers}
                                            // setAllSelectedUsers = {setAllSelectedUsers}
                                            // getPopoverData={getPopoverData}
                                        />
                                ))} */}

                                <CardActions>
                                    <Button 
                                        variant="contained" 
                                        // startIcon={<Add/>} 
                                        size="small"                                     
                                        onClick={addLevel}
                                    >
                                        ADD LEVEL
                                    </Button>
                                </CardActions>

                            </CardContent>
                        </Card>



                    </Box>
                </Container>
            </main> 
        </React.Fragment>
    );
};