import GlobalStyles from "@mui/material/GlobalStyles";
import * as React from 'react';

export const AppMainStyle = (
    <GlobalStyles
    styles={(theme) => ({
      ':root': {
          '--color-primary': theme.palette.primary.main,
          '--color-secondary': theme.palette.secondary.main,
          '--bg-white': theme.palette.white,
          '--grey-0': theme.palette.grey[0],
          '--grey-50': theme.palette.grey[50],
          '--grey-100': theme.palette.grey[100],
          '--grey-200': theme.palette.grey[200],
          '--grey-300': theme.palette.grey[300],
          '--grey-400': theme.palette.grey[400],
          '--grey-500': theme.palette.grey[500],
          '--grey-600': theme.palette.grey[600],
          '--grey-700': theme.palette.grey[700],
          '--grey-800': theme.palette.grey[800],
          '--grey-900': theme.palette.grey[900],
          '--bluegrey-100': theme.palette.bluegrey[100],
          '--bluegrey-200': theme.palette.bluegrey[200],
          '--bluegrey-300': theme.palette.bluegrey[300],
          '--bluegrey-400': theme.palette.bluegrey[400],
          '--bluegrey-500': theme.palette.bluegrey[500],
          '--bluegrey-600': theme.palette.bluegrey[600],
          '--bluegrey-700': theme.palette.bluegrey[700],
          '--bluegrey-800': theme.palette.bluegrey[800],
          '--bluegrey-900': theme.palette.bluegrey[900],
          '--primary-50': theme.palette.primary[50],
          '--primary-100': theme.palette.primary[100],
          '--primary-200': theme.palette.primary[200],
          '--primary-300': theme.palette.primary[300],
          '--primary-400': theme.palette.primary[400],
          '--primary-500': theme.palette.primary[500],
          '--primary-600': theme.palette.primary[600],
          '--primary-700': theme.palette.primary[700],
          '--primary-800': theme.palette.primary[800],
          '--primary-900': theme.palette.primary[900],
          '--warning-50': theme.palette.warning[50],
          '--warning-100': theme.palette.warning[100],
          '--warning-200': theme.palette.warning[200],
          '--warning-300': theme.palette.warning[300],
          '--warning-400': theme.palette.warning[400],
          '--warning-500': theme.palette.warning[500],
          '--warning-600': theme.palette.warning[600],
          '--warning-700': theme.palette.warning[700],
          '--warning-800': theme.palette.warning[800],
          '--warning-900': theme.palette.warning[900],
          '--success-50':  theme.palette.success[50],
          '--success-100': theme.palette.success[100],
          '--success-200': theme.palette.success[200],
          '--success-300': theme.palette.success[300],
          '--success-400': theme.palette.success[400],
          '--success-500': theme.palette.success[500],
          '--success-600': theme.palette.success[600],
          '--success-700': theme.palette.success[700],
          '--success-800': theme.palette.success[800],
          '--success-900': theme.palette.success[900],          
          '--headerHeight': '50px',
          '--PageToolbarHeight': '55px',

      },
      '.app-header': {
        minHeight: 'var(--headerHeight)',
        width: "100%",                  
        position: 'fixed',
        zIndex: 100,
      },
      '.app-header .MuiToolbar-root': {
        minHeight: 'var(--headerHeight)',
        padding: '0 16px',
        background: '#fff', 
      },
      '.leftSidebar .MuiPaper-root':{
        backgroundColor: "var(--bg-white)",
        color: "#FFFFFF",
        width: 64,
        top: 'var(--headerHeight)',
        height: 'calc(100vh - var(--headerHeight))',
        zIndex:99,
        // overflow: 'hidden',
        overflow: 'auto',
      },
      '@media screen and (max-width:600px)':{
        '.leftSidebar .MuiPaper-root':{
          width:'0'
        },
        '.popover-menu':{
          display:'none'
        }
      },
      '.mainleft-menu>.MuiCollapse-root': {
        backgroundColor: '#fff',
        // border: 'solid 1px red',
        position: 'absolute',
        top: 0,
        left:"100%",
      },
      '.mainleft-menu .MuiListItem-root .MuiListItemIcon-root': {
        minWidth:'30px',
        marginRight:'16px',
        justifyContent:'center'
      },
      // '.mainleft-menu ul ul.MuiList-root li a, .popover-menu ul ul.MuiList-root li a': {
      //   paddingLeft: '42px'
      // },
      '.open .mainleft-menu>.MuiCollapse-root': {        
        position: 'static',
      },
      '.open .leftSidebar .MuiPaper-root': {               
        width: 240,
      },
      '.main-layout':{
        paddingLeft: 64,
      },
      '.open .main-layout':{
        paddingLeft: 240,
      },
      '.popover-menu .MuiPopover-paper .MuiListItemIcon-root': {
        display: 'none'
      },
      '.popover-menu .MuiPopover-paper .MuiListItemText-root':{
        marginRight:'20px'
      },
      '.popover-menu .MuiPopover-paper': {
        overflowY: 'visible',
        overflowX: 'visible',
        border: '1px solid rgb(240, 240, 240)',
        boxShadow:'rgb(0 0 0 / 8%) 0px 1px 4px',
        width:'240px'
      },
      '.popover-menu .MuiPopover-paper:before': {
        content: '""',
        position:' absolute',
        width: '10px',
        height: '10px',
        borderLeft: '1px solid rgb(240, 240, 240)',
        borderBottom:' 1px solid rgb(240, 240, 240)',
        left: '-6px',
        top: '20px',
        background:' #fff',
        transform:' translateY(-50%) rotate(45deg)',
      },
      '.DataGFullScreen-wrap': {
        // height: 'calc(100vh - var(--PageToolbarHeight) - var(--headerHeight))',       
        height: 'calc(100vh - var(--PageToolbarHeight))',       
        width: '100%',
        background: 'var(--bg-white)', 
      },
      '.MuiDataGrid-root .datagrid-toolbar': {    
        padding: '8px 16px',
        borderBottom: 'solid 1px var(--bluegrey-500)',
      },
      '.MuiDataGrid-root .head-datagrid-toolbar': {    
        padding: '12px 16px',
      },
      '.datagrid-toolbar .toolbar-right': {
        marginLeft: 'auto',
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        justifyContent: 'end',
      }, 
      '.fullScreenGrid .datagrid-toolbar .app-pagetitle, .datagrid-PageToolbar .app-pagetitle': {
        color: theme.palette.grey[900],
        fontSize: '18px',
        fontWeight: '600',
        marginRight: '16px',
      },
      '.fullScreenGrid .datagrid-toolbar [aria-label="Search"]': {
        width: '100%',
        maxWidth: '250px',        
        [theme.breakpoints.only('md')]: {
          maxWidth: '200px',          
        },
        [theme.breakpoints.down('sm')]: {
          maxWidth: '100%',
          marginLeft: 0,
          padding: '5px 0px 5px 0',         
          border: 'solid 1px var(--bluegrey-500)',
          borderRadius: '4px',
        },
        // [theme.breakpoints.between('sm', 'md')]: {
        //   border: 'solid 1px blue'
        // },
      },
      '.fullScreenGrid .datagrid-toolbar .DataGrid-SearchBar[aria-label="Search"]': {
        width: '100%',
        maxWidth: '250px',        
        [theme.breakpoints.only('md')]: {
          maxWidth: '200px',          
        },
        [theme.breakpoints.down('sm')]: {
          maxWidth: '100%',
          marginLeft: '0',
          padding: '0',         
          border: '0',
          borderRadius: '0',
        },        
      },
      '.fullScreenGrid .datagrid-toolbar [aria-label="Search"] .MuiInput-root': {
        width: '100%',
        padding: '0 0',
        borderRadius: '4px',
        //border: `solid 1px ${theme.palette.bluegrey[500]}`,           
      },
      '.fullScreenGrid .datagrid-toolbar [aria-label="Search"] .MuiInput-root.Mui-focused': {
        //borderColor: theme.palette.primary.main,
      },
      '.fullScreenGrid .datagrid-toolbar [aria-label="Search"] .MuiInput-root:before, .fullScreenGrid .datagrid-toolbar [aria-label="Search"] .MuiInput-root:after': {
        display: 'none',
      },
      '.datagrid-PageToolbar':{
        borderBottom: 'solid 1px var(--bluegrey-500)',
      },
      '.dg-filter': {        
        [theme.breakpoints.down('sm')]: {
          // '& .MuiButtonBase-root .MuiButton-startIcon':{
          //   display: 'none',
          // }
        }
      },
      '.buyer-linked-drawer>.MuiPaper-root': {
        backgroundColor: "var(--bg-white)",        
        minWidth: 360,
        maxWidth: 360,
        top: 0,
        height: 'calc(100vh)',
        zIndex:99,
      },       
      '.buyer-linked-drawer .drawerinner_content': {
        flex: '1 1 auto',
        padding: '8px 8px',      
        //height: 'calc(100vh - 90px)',
        height: '100%',
        maxHeight: '100%',
        display: 'inline-block !important',
        backgroundColor: 'var(--grey-100)',
        overflowY: 'auto',        
      },  
      '@media screen and (max-width: 768px)':{
        '.datagrid-toolbar': {
          display: 'block',
        },
       
        '.datagrid-toolbar .toolbar-right': {        
          // display: 'block', 
          //borderTop: `solid 1px var(--bluegrey-500)`,
          margin: '0 0',
          // padding: '8px 16px 0 16px'
        },
      },
      '@media screen and (max-width: 599px)':{
        '.datagrid-toolbar .toolbar-right': {      
          display: 'block',
        },
        '.datagrid-toolbar .toolbar-right .MuiDateRangePickerInput-root, .datagrid-toolbar .toolbar-right .MuiTextField-root':{
          width:'100%'
        },
        '.GridFooterContainerInvoice':{
          flexDirection: 'column',
          paddingTop: '14px'
        },
        '.dg-filter .MuiButtonBase-root': {
          textIndent: '-9999px',
          minWidth: '40px'
        },
        '.dg-filter .MuiButtonBase-root .MuiButton-startIcon':{
          marginRight:'0',
          marginLeft:'0'
        }
      }, 
      '.leftSidebar .MuiPaper-root':{
        backgroundColor: "var(--bg-white)",
        color: "#FFFFFF",
        width: 64,
        top: 'var(--headerHeight)',
        height: 'calc(100vh - var(--headerHeight))',
        zIndex:99,
        // overflow: 'hidden',
        overflow: 'auto',
      },
      '@media screen and (max-width:600px)':{
        '.leftSidebar .MuiPaper-root':{
          width:'0'
        },
        '.popover-menu':{
          display:'none'
        }
      },
      '.mainleft-menu>.MuiCollapse-root': {
        backgroundColor: '#fff',
        // border: 'solid 1px red',
        position: 'absolute',
        top: 0,
        left:"100%",
      },
      '.mainleft-menu .MuiListItem-root .MuiListItemIcon-root': {
        minWidth:'30px',
        marginRight:'16px',
        justifyContent:'center'
      },
      '.open .mainleft-menu>.MuiCollapse-root': {        
        position: 'static',
      },
      '.open .leftSidebar .MuiPaper-root': {               
        width: 240,
      },
      '.main-layout':{
        paddingLeft: 64,
      },
      '.open .main-layout':{
        paddingLeft: 240,
      },
      '.popover-menu .MuiPopover-paper .MuiListItemIcon-root': {
        display: 'none'
      },
      '.popover-menu .MuiPopover-paper .MuiListItemText-root':{
        marginRight:'20px'
      },
      '.popover-menu .MuiPopover-paper': {
        overflowY: 'visible',
        overflowX: 'visible',
        border: '1px solid rgb(240, 240, 240)',
        boxShadow:'rgb(0 0 0 / 8%) 0px 1px 4px',
        width:'240px'
      },
      '.popover-menu .MuiPopover-paper:before': {
        content: '""',
        position:' absolute',
        width: '10px',
        height: '10px',
        borderLeft: '1px solid rgb(240, 240, 240)',
        borderBottom:' 1px solid rgb(240, 240, 240)',
        left: '-6px',
        top: '20px',
        background:' #fff',
        transform:' translateY(-50%) rotate(45deg)',
      },
      '.toolbar-right .MuiDateRangePickerInput-root .MuiInputBase-input':{
        letterSpacing:'normal'
      },
      '.DataGFullScreen-wrap .MuiDataGrid-pinnedColumnHeaders': {
        backgroundColor:'#F6F8FB'
      },
      '.DataGFullScreen-wrap .MuiDataGrid-pinnedColumns': {
        backgroundColor:'#fff'
      },
      '.RangeSelect .MuiSelect-select':{
        padding:'5px'
      },      
      '.DataGrid-pg-menu':{
        display: 'flex'
      },
      '.DataGrid-pg-menu li a':{
        fontSize:'14px',
        fontWeight:'600',
        color:'#526484',
        textDecoration:'none',
        padding:'0 16px 6px 16px'
      },
      '.DataGrid-pg-menu li a.active':{
        borderBottom:'1px solid var(--primary-500)'
      },
      '.datagrid-toolbar .datagrid-search .MuiInput-root::before': {
        border:'none',
      },
      '.datagrid-search .MuiSvgIcon-root':{
        color:'#3c4d62',
      },
      '.dg-filter .date-range-select':{
        padding:'4px 8px',
        borderColor:'var(--grey-50)'
      },
      '.MuiDataGrid-columnHeader .MuiDataGrid-columnSeparator':{
        color:'#a6c1d3 !important'
      },
      '.mainleft-menu > .MuiListItem-root > a.MuiButtonBase-root':{
        whiteSpace: 'nowrap'
      },
      '.open .mainleft-menu>.MuiCollapse-root .MuiCollapse-wrapper': {
        position: 'relative',
        paddingLeft: '28px'
      },
      '.open .mainleft-menu>.MuiCollapse-root .MuiCollapse-wrapper:before': {
        content:'""',
        position:'absolute',
        width:'2px',
        height:'calc(100% - 4px)',
        background:'rgba(166, 193, 211, 0.4)',
        left:'28px'
      },
      '.mainleft-menu ul.MuiList-root':{
        marginLeft:'18px'
      },
      '.mainleft-menu ul.MuiList-root ul': {
        marginLeft: '10px',
      },
      '.mainleft-menu ul.MuiList-root .MuiListItemIcon-root': {
        display: 'none'
      },
      '.mainleft-menu .MuiListItem-root a.MuiButtonBase-root:hover, .mainleft-menu .MuiListItemButton-root.Mui-selected, .mainleft-menu .MuiListItem-root.Mui-selected, .popover-menu ul.MuiList-root li a:hover, .popover-menu ul.MuiList-root li a.Mui-selected': {
        backgroundColor: '#fff',
        color:'#096bef',
      },
      '.mainleft-menu .MuiListItem-root a.MuiButtonBase-root:hover svg, .mainleft-menu .MuiListItemButton-root.Mui-selected svg, .mainleft-menu .MuiListItem-root.Mui-selected svg, .popover-menu ul.MuiList-root li a.Mui-selected svg':{
        fill:'#096bef',
      },
      '.popover-menu ul ul.MuiList-root li a': {
        padding: '5px 15px 5px 22px'
      },
      '.popover-menu .MuiCollapse-root': {
        position: 'relative',
        paddingLeft: '25px'
      },
      '.popover-menu .MuiCollapse-root:before': {
        content:'""',
        position:'absolute',
        width:'2px',
        height:'calc(100% - 4px)',
        background:'rgba(166, 193, 211, 0.4)',
        left:'25px',
        zIndex:'99'
      },
      '.form-wrapper .TextLabel': {
        fontSize:'14px',
        color: 'var(--grey-500)',        
        textTransform:'uppercase',        
        marginBottom:'5px',
        textTransform:'uppercase'
      },
      '.CardHeader .MuiTypography-h5':{
        fontSize:'14px', 
        fontWeight:'600',
        textTransform:'uppercase'
      },
      '.CardLevel':{
        position:'relative',
        width:'100%',
        display:'flex',
        justifyContent:'space-between'
      },
      '.CardLevel:before':{
        height:'1px',
        width: 'calc(100% - 100px)',
        content: '""',
        background: 'var(--grey-400)',
        position:'absolute',
        top: '50%',
        left: 0,
        right: 0,
        margin: '0 auto'
      },
      '.Level-CardBox .Level-ApprovDtl': {
        padding: '0',
      },
      '.Level-ApprovDtl ul li': {
        padding: '0',
        alignItems:'center'
      },
      '.Level-ApprovDtl ul li .MuiListItemAvatar-root': {
        minWidth:'32px',
        marginTop:'0',
      },
      '.Level-ApprovDtl ul li .MuiAvatar-root': {
        width:'32px',
        height:'32px',
        marginTop:'0',
        marginRight:'10px',
        backgroundColor:'#6e8dfa'
      },
      '.Level-ApprovDtl ul li .MuiTypography-root':{
        fontSize:'13px', 
        fontWeight:'600',
      },
      '.Popover-ApprovDtl':{
        '& .MuiButtonBase-root':{
          padding:'0 10px',
          borderRadius:'3px'
        }
      },
      '.Popover-ApprovDtl ul li .mailId': {
        fontSize:'12px',
        fontWeight:'400',
        display:'block',
        color:'var(--bluegrey-700)'
      },
      '.CardLevel .approve-btn':{
        fontSize:'10px', 
        padding:'2px 6px',
        marginLeft:'10px', 
        '&.MuiButtonBase-root .MuiButton-startIcon':{
          marginRight:'2px',
          marginLeft: '-5px'
        },
        [theme.breakpoints.down('md')]: {
          minWidth:'30px',
          '&.MuiButtonBase-root .MuiButton-startIcon':{
            marginLeft: '0'
          },
        },
      },
      '.CardLevel .level-info-badge':{
        borderRadius:'3px',
        padding: '0 5px 0 3px',
        fontSize: '14px',
        '& .MuiSvgIcon-root':{          
          marginLeft: '0',
          marginRight:'-2px',
          fontSize: '14px',
        },
        '& .MuiChip-label':{          
          padding: '0'
        }
      },
      '.card-level-head':{
        display:'flex',
        alignItems:'center',
        background:'var(--bg-white)',
        zIndex:'11',
      },
      '.level-title':{        
        display:'flex',
        alignItems:'center',
        border:'1px solid #fff',
        cursor:'text',
        padding:'6px 8px',
        borderRadius:'4px',
        height:'40px',
        '&.level-title .MuiIconButton-root':{
          display:'none',
        },
        '&.level-title:hover .MuiIconButton-root':{
          display:'block',
        },
        '&:hover': {        
            // border: '1px solid #a6c1d3'
            background:'var(--grey-100)',
            minWidth:'210px',
            boxShadow:'8px 0 0px -3px #fff',
        },
        [theme.breakpoints.only('xs')]: {
          '&:hover': {        
            minWidth:'165px',
          },
        },
      },
      '.level-edit-box': {
        position:'absolute',
        background: '#fff',    
        borderRight: '8px solid #fff',
        [theme.breakpoints.only('xs')]: {
          width:'165px',
        },
      },
      '.tabs-panel': {
        '& .MuiBox-root': {
          padding:'10px 0 0 0'
        }
      },
      

    })}  
  
    />
  );