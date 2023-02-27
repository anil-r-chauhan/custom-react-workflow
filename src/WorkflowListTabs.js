import * as React from 'react';
import {Tabs,Tab,Typography,Box} from '@mui/material';
import {DataGridPro} from '@mui/x-data-grid-pro';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </Box>
  );
}

export default function BasicTabs({row}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // console.log('roww', row)

  const rulesRow = row.rules.map((el, i) => ({
    ...el, 'id':i+1 
  }))

  const levelRow = row.level.steps.map((el, i) => ({
    'id':el.step_sequence_no ,"step_name": el.step_name, "user": el.conditions[0].value 
  }))

  // console.log('rulesRow',rulesRow)
  // console.log('levelRow',levelRow)

  return (
    <Box>
      
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Rules" sx={{textTransform: 'capitalize' }}/>
        <Tab label="Levels" sx={{textTransform: 'capitalize' }}/>
      </Tabs>
      
      <TabPanel value={value} index={0} className="tabs-panel">
        <DataGridPro                
          columns = {[
            {
                field:'FieldName',
                headerName:'Field Name',
                width:160,
                renderCell:(row) => {
                  return(
                    // <Typography variant="body2" sx={{fontWeight:'500'}}>Category</Typography>
                    <Typography variant="body2" sx={{fontWeight:'500'}}>{row.row.attribute_id}</Typography>
                )}           
            },
            {
                field:'Condition',
                headerName:'Condition',
                width:160,
                renderCell:(row) => {
                  return(
                    // <Typography variant="body2" sx={{fontWeight:'500'}}>Category</Typography>
                    <Typography variant="body2" sx={{fontWeight:'500'}}>{row.row.condition}</Typography>
                )}
            },
            {
                field:'Value',
                headerName:'Workflow Title',
                width:275,
                renderCell:(row) => {
                  return(
                    // <Typography variant="body2" sx={{fontWeight:'500'}}>Category</Typography>
                    <Typography variant="body2" sx={{fontWeight:'500'}}>{typeof row.row.value == "string" ? row.row.value : row.row.value.join(", ")}</Typography>
                )}
            }
          ]}
          // rows = {[
          //   { id: 1, Condition:'=', Value:'Rakesh PR Category' },
          //   { id: 2, Condition:'in', Value:'Ahmedabad' },
          //   { id: 3, Condition:'in', Value:'doc type name' },
          // ]}
          rows = {rulesRow}
          sx={{ 
            height:'220px', 
            '&.MuiDataGrid-root':{
              borderRadius: 0,
            },
            '& .MuiDataGrid-main .MuiDataGrid-row--lastVisible .MuiDataGrid-cell':{
              borderBottomColor: 'transparent'
            }
          }}
          hideFooter
        />            
      </TabPanel>
      <TabPanel value={value} index={1} className="tabs-panel">
        <DataGridPro                
          columns = {[
            {
                field:'Level',
                headerName:'Level',
                width:160,
                renderCell:(row) => {
                  return(
                    // <Typography variant="body2" sx={{fontWeight:'500'}}>Level 1</Typography>
                    <Typography variant="body2" sx={{fontWeight:'500'}}>{row.row.step_name}</Typography>
                )}             
            },
            {
                field:'User',
                headerName:'User',
                width:275,
                renderCell:(row) => {
                  return(
                    // <Typography variant="body2" sx={{fontWeight:'500'}}>Level 1</Typography>
                    <Typography variant="body2" sx={{fontWeight:'500'}}>{row.row.user.join(", ")}</Typography>
                )}
            },            
          ]}
          // rows = {[
          //   { id: 1, User:'Farhan Mansuri, Yasir Mansuri' },
          //   { id: 2, User:'Farhan Mansuri' },
          //   { id: 3, User:'Farhan Mansuri, Sanjana Shah' },
          // ]}
          rows={levelRow}
          sx={{ 
            height:'220px', 
            '&.MuiDataGrid-root':{
              borderRadius: 0,
            },
            '& .MuiDataGrid-main .MuiDataGrid-row--lastVisible .MuiDataGrid-cell':{
              borderBottomColor: 'transparent'
            }
          }}
          hideFooter
        />
      </TabPanel>      
    </Box>
  );
}
