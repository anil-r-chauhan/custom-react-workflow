import * as React from 'react';
import { Box, Switch, Typography, Button, Stack, ButtonGroup, Paper, } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import {
    DataGridPro, 
    GridToolbarQuickFilter,
    GridToolbarContainer, 
    GridToolbarFilterButton, 
    GridToolbarColumnsButton, 
    GridToolbarDensitySelector, 
    GridToolbarExport,
    GridFooterContainer,
    GridFooter
} from '@mui/x-data-grid-pro';
import WorkflowTabs from './WorkflowListTabs.js';
import { Add, MoreVert, Remove } from '@mui/icons-material';
import WorkflowData from "./workflowlist.json";
// console.log('WorkflowData', WorkflowData)
  const PageToolbar = styled('div')(({theme}) => ({   
    background: '#ffffff',
    position: 'sticky',
    top: 0,
    width: '100%',
    minHeight: '55px',
    padding: '10px 16px',
    zIndex:'99'
  }));

  function DetailPanelContent({row}) {
    return (
      <Stack
        sx={{height:'100%', borderBottom:'1px solid var(--bluegrey-500)' }}
      >
        <Paper sx={{ flex: 1, mx: 'auto', width: '100%', padding:'0 35px 10px 35px', borderRadius:'0', boxShadow:'none'}}>
          <Stack sx={{ height: 1, width:'calc(100% - 75px)' }}>
            <WorkflowTabs row={row} />
          </Stack>
        </Paper>
      </Stack>
    );
  }

  function CustomGridToolbar() {    
    return (  
      <React.Fragment>
        <GridToolbarContainer className="datagrid-toolbar">
          
          <Grid container spacing={0} sx={{
            width: '100%', pt:1, 
            '&.MuiGrid2-root': {             
              paddingTop: {xs:'0', sm:'0', md:'0', alignItems:'center'},
            }
          }}>

            <Grid xs={12} sm={12} md={3} xl={4}>
              <Box sx={{display: 'flex', alignItems: 'center', gap: 1, }}>                
                <GridToolbarQuickFilter className="DataGrid-SearchBar" sx={{pb:0}} /> 
              </Box>               
            </Grid>

            <Grid xs={12} sm={12} md={9} xl={8} sx={{ display:{xs:'none', sm:'none', md:'flex'} }}>
            <Box className="toolbar-right">
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1,  }}>
                      
                    </Box>                                     
                    <Box className='dg-filter' >
                      <GridToolbarColumnsButton />
                      <GridToolbarDensitySelector />
                      <GridToolbarExport />
                      <GridToolbarFilterButton />
                    </Box>                    
                  </Box>               
            </Grid> 

          </Grid>
        </GridToolbarContainer>


        <GridToolbarContainer className="datagrid-toolbar" sx={{ display:{sm:'flex', md:'none'} }}>
          <Grid container spacing={0} sx={{width: '100%', alignItems:'center'}}>
            <Grid xs={2} md={6}>
              <Box>
                
              </Box> 
            </Grid>
            <Grid xs={10} md={6} sx={{textAlign:{xs:'right', sm:'right'} }}>
              <Box className='dg-filter' >
                <GridToolbarColumnsButton />
                <GridToolbarDensitySelector />
                <GridToolbarExport />
                <GridToolbarFilterButton />
              </Box>
            </Grid>
          </Grid>
        </GridToolbarContainer>

      </React.Fragment>
    );
  }

  function CustomFooter () {
    return (
      <GridFooterContainer sx={{ justifyContent:'end' }} className="GridFooterContainerInvoice">
        <Typography variant="h7">Total Order Line items : 15</Typography>
        {/* Add what you want here */}
        <GridFooter sx={{
          border: 'none', // To delete double border.
          }} />
      </GridFooterContainer>
    );
  }

  const SwitchLabel = { inputProps: { 'aria-label': 'Switch' } };

  const columns = [
    {
        field:'more',
        headerName:'',
        width:30,
        align:'center',
        renderCell: () => {
            return (              
              <MoreVert />              
            );    
        }    
    },
    {
        field:'WorkflowTitle',
        headerName:'Workflow Title',
        width:160,
        renderCell:(row) => {
          return(
            // <Typography variant="body2" sx={{fontWeight:'500'}}>PP Bags Flow</Typography>
            <Typography variant="body2" sx={{fontWeight:'500'}}>{row.row.meta.name}</Typography>
        )}
    },
    {
        field:'Active',
        headerName:'Active',
        width:160,
        renderCell: (row) => {
            return (
              // <Switch {...SwitchLabel} defaultChecked  />
              <Switch {...SwitchLabel} checked={row.row.meta.status == 'active' ? true : false}  />
            );    
        }
    },
    {
        field:'description',
        headerName:'Description',
        width:275,
        renderCell:(row) => {
          return(
            // <Typography variant="body2" sx={{fontWeight:'500'}}>PP Bags Flow</Typography>
            <Typography variant="body2" sx={{fontWeight:'500'}}>{row.row.meta.description}</Typography>
        )}
    },
    {
        field:'Date',
        headerName:'Date',
        width:160,
        renderCell:(row) => {
          return(
            // <Typography variant="body2" sx={{fontWeight:'500'}}>PP Bags Flow</Typography>
            <Typography variant="body2" sx={{fontWeight:'500'}}>{new Date(row.row.meta.updated_datetime).toLocaleDateString()}</Typography>
        )}
    }
  ]

  // const rows = [
  //   { id: 1, Active:'', Discription:'Discription...', Date:'05/12/2022' },
  //   { id: 2, Active:'', Discription:'Discription...', Date:'05/12/2022' },
  //   { id: 3, Active:'', Discription:'Discription...', Date:'05/12/2022' },
  //   { id: 4, Active:'', Discription:'Discription...', Date:'05/12/2022' },
  //   { id: 5, Active:'', Discription:'Discription...', Date:'05/12/2022' },
  //   { id: 6, Active:'', Discription:'Discription...', Date:'05/12/2022' },
  //   { id: 7, Active:'', Discription:'Discription...', Date:'05/12/2022' },
  //   { id: 8, Active:'', Discription:'Discription...', Date:'05/12/2022' },
  //   { id: 9, Active:'', Discription:'Discription...', Date:'05/12/2022' },
  //   { id: 10, Active:'', Discription:'Discription...', Date:'05/12/2022' },
  //   { id: 11, Active:'', Discription:'Discription...', Date:'05/12/2022' },
  //   { id: 12, Active:'', Discription:'Discription...', Date:'05/12/2022' },
  //   { id: 13, Active:'', Discription:'Discription...', Date:'05/12/2022' },
  //   { id: 14, Active:'', Discription:'Discription...', Date:'05/12/2022' },
  //   { id: 15, Active:'', Discription:'Discription...', Date:'05/12/2022' },
  //   { id: 16, Active:'', Discription:'Discription...', Date:'05/12/2022' },
  //   { id: 17, Active:'', Discription:'Discription...', Date:'05/12/2022' },
  //   { id: 18, Active:'', Discription:'Discription...', Date:'05/12/2022' },


  // ]
  
  export function CustomExpandIcon() {
      return <Add className="icon" />;
    }
    
    export function CustomCollapseIcon() {
        return <Remove className="icon" />;
    }
    
    function WorkFlowList() {
    const rows = WorkflowData
    const getDetailPanelContent = React.useCallback(
      ({ row }) => <DetailPanelContent row={row} />,
      [],
    );
    const getDetailPanelHeight = React.useCallback(() => 300, []);

    return(
        <main style={{
            width: '100%',
            maxWidth: '100%',
            padding: 0,
          }}>
            <PageToolbar className="datagrid-PageToolbar head-datagrid-toolbar">
                <Stack spacing={2} direction="row" alignItems={"center"}>
                    <Typography className='app-pagetitle'>
                        Workflow
                    </Typography>

                    <ButtonGroup variant="contained" aria-label="split button" sx={{ml:'auto !important'}}>                        
                        <Button variant="contained" size='small'>+ New Workflow</Button>            
                    </ButtonGroup>
                </Stack>
            </PageToolbar> 

            <div className='DataGFullScreen-wrap'>
                <DataGridPro
                    rows={rows}
                    columns={columns}
                    headerHeight={40}
                    //rowsPerPageOptions={[15, 25, 50, 75,500,1000]}                    
                    checkboxSelection
                    disableSelectionOnClick  
                    pagination                        
                    components={{ 
                        // DetailPanelExpandIcon: CustomExpandIcon,
                        // DetailPanelCollapseIcon: CustomCollapseIcon,
                        Toolbar: CustomGridToolbar,
                        Footer: CustomFooter 
                    }}                                
                    className="fullScreenGrid"
                    sx={{
                        '&.MuiDataGrid-root':{
                            border: 0,
                        },
                        '& .MuiDataGrid-virtualScrollerContent--overflowed .MuiDataGrid-row--lastVisible .MuiDataGrid-cell':{
                          borderBottomColor: '#a6c1d3'
                        }
                    }}
                    getDetailPanelHeight={getDetailPanelHeight}
                    getDetailPanelContent={getDetailPanelContent}
                />
            </div>
        </main>
    );
}

export default WorkFlowList;