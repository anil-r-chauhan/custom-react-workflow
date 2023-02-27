import { createTheme } from '@mui/material/styles';
//import { green, purple } from "./colors";


export const white = '#FFFFFF';
const text = {
  primary:"#526484", //"#5A6778"
  secondary:"#8091a7",
  disabled:"rgba(0, 0, 0, 0.38)",
  hint:"rgba(0, 0, 0, 0.50)"
}
const primary = {
  light: '#3a88f2',
  main: '#096bef', 
  dark: '#064aa7',
  50: '#e1edfd',
  100: '#b5d3fa',
  200: '#84b5f7',
  300: '#5397f4',
  400: '#2e81f1',
  500: '#096bef',
  600: '#0863ed',
  700: '#0658eb',
  800: '#054ee8',
  900: '#023ce4',
  A100: '#ffffff',
  A200: '#d8e0ff',
  A400: '#a5b7ff',
  A700: '#8ba2ff',
  contrastDefaultColor: 'main',
}
const secondary = {
  light:'#4b5561',
  main: '#1f2b3a',
  dark: '#151e28'
}
export const success = {
  light: '#7bd7be',
  main: '#5bceae',
  dark: '#3f9079',
  50:  '#ebf9f5',
  100: '#cef0e7',
  200: '#ade7d7',
  300: '#8cddc6',
  400: '#74d5ba',
  500: '#5bceae',
  600: '#53c9a7',
  700: '#49c29d',
  800: '#40bc94',
  900: '#2fb084',
  A100: '#f5fffb',
  A200: '#c2ffe9',
  A400: '#8fffd7',
  A700: '#75ffce',    
}
const info = {
  light: '#33cfe0',
  main: '#00c3d9',
  dark: '#008897',
  '50': '#e0f8fa',
  '100': '#b3edf4',
  '200': '#80e1ec',
  '300': '#4dd5e4',
  '400': '#26ccdf',
  '500': '#00c3d9',
  '600': '#00bdd5',
  '700': '#00b5cf',
  '800': '#00aeca',
  '900': '#00a1c0',
  'A100': '#e9fbff',
  'A200': '#b6f1ff',
  'A400': '#83e7ff',
  'A700': '#69e3ff',
}
export const warning = {
  main:'#f4bd0e',
  50:  '#fdf8e1',
  100: '#fbebb3',
  200: '#f9de82',
  300: '#f6d350',
  400: '#f5c82a',
  500: '#f4be0e',
  600: '#f4b104',
  700: '#f49e00',
  800: '#f48e00',
  900: '#f47000',
}
const error = {
  main: '#ff5547',  
  50: "#ffedf0",
  100: "#ffd2d7",
  200: "#f3a2a3",
  300: "#ec7f7f",
  400: "#f8625e",
  500: "#ff5647",
  600: "#ef4d45",
  700: "#dd433e",
  800: "#d03d37",
  900: "#c0342c",
  contrastDefaultColor: 'main',
}
const grey = {
  0:   '#FFFFFF',
  50:  '#F6F8FB',   
  100: '#ebeef2 ',
  200: '#e5e9f2',
  300: '#dbdfea',
  400: '#b7c2d0', 
  500: '#8091a7',
  600: '#3c4d62',
  700: '#344357',
  800: '#2b3748',
  900: '#1f2b3a',   
}
const bluegrey = { 
  0:   '#FFFFFF',  
  100: '#F2FBFC',
  200: '#E5F5FA',
  300: '#D2E9F1',
  400: '#C0D8E4', 
  500: '#a6c1d3',
  600: '#7999B5',
  700: '#537497',
  800: '#34527A',
  900: '#1F3965',   
}

let theme = createTheme();
theme = createTheme(theme, {
    palette: { 
       mode: 'light',    
        background: {      
          default: '#EBEEF2',      
        },
        text,
        white,
        primary,
        secondary,
        success,
        info,
        warning,
        error, 
        themeBorder: `${bluegrey[500]}`,
        grey: {
          0:   '#FFFFFF',  
          50:  '#F6F8FB',
          100: '#ebeef2 ',
          200: '#e5e9f2',
          300: '#dbdfea',
          400: '#b7c2d0', 
          500: '#8091a7',
          600: '#3c4d62',
          700: '#344357',
          800: '#2b3748',
          900: '#1f2b3a',   
        },
        bluegrey: { 
          0:   '#FFFFFF',  
          100: '#F2FBFC',
          200: '#E5F5FA',
          300: '#D2E9F1',
          400: '#C0D8E4', 
          500: '#a6c1d3',
          600: '#7999B5',
          700: '#537497',
          800: '#34527A',
          900: '#1F3965',   
        },
        divider:  `${bluegrey[500]}`,
        // shadows: {
        //   0: 'none',
        //   1: '0px 16px 12px 0px rgba(112, 144, 176, 0.25)',
        //   2: '0px 16px 12px 0px rgba(112, 144, 176, 0.25)',
        // }
    },    
    typography: {
      body1:{
        fontSize: '1rem',
        [theme.breakpoints.down('xl')]: {
          fontSize: '0.875rem',
        },
        [theme.breakpoints.down('lg')]: {
          fontSize: '0.875rem',
        },        
        [theme.breakpoints.down('md')]: {
          fontSize: '1rem', 
        },
      },
      vendorsubtext: {
        fontSize: '0.875rem',
        [theme.breakpoints.down('xl')]: {
          fontSize: '0.75rem',
        },    
        [theme.breakpoints.down('md')]: {
          fontSize: '0.875rem', 
        },
        fontWeight: 400,
        lineHeight: 1,        
      },      
    },
    components: {          
      MuiPaper: {
        // styleOverrides: {
        //   root: {
        //     boxShadow: '0px 16px 12px 0px rgba(112, 144, 176, 0.25)',
        //   }
        // }
      },
      MuiCard:{
        styleOverrides: {
          root: {
            //borderColor: `${bluegrey[500]}`,
          }
        }
      },
      MuiIconButton: {
        variants: [
          {
            props: { variant: 'outlined', color: 'default' },
            style: {                            
              border: 'solid 1px',
              borderColor: `${bluegrey[500]}`,
            }
          }
        ]
      },
        MuiButton: {
            styleOverrides: {
              root: {
                boxShadow: 'none',
                '&:hover':{
                  boxShadow: 'none',
                }
              }
            },
            variants: [
              //Icon Contained
              {
                props: { variant: 'icon-contained', color: 'default' },
                style: {
                  color: `${grey[600]}`,
                  backgroundColor: `${bluegrey[500]}`,
                  border: 'solid 1px',
                  borderColor: `${bluegrey[500]}`,
                }
              },
              {
                props: { variant: 'icon-contained', color: 'primary' },
                style: {
                  color: `${white}`,
                  backgroundColor: `${primary.main}`,
                  // border: 'solid 1px',
                  // borderColor: `${primary.main}`,
                  '&:hover':{
                    backgroundColor: `${primary.dark}`,
                  }
                },
              },
              {
                props: { variant: 'icon-contained', size: 'small' },
                style: {
                  minWidth: 30,
                  height: 30,
                  padding: 0
                }
              },
              {
                props: { variant: 'icon-contained', size: 'medium' },
                style: {
                  minWidth: 38,
                  height: 38,
                  padding: 0
                }
              },
              {
                props: { variant: 'icon-contained', size: 'large' },
                style: {
                  minWidth: 42,
                  height: 42,
                  padding: 0
                }
              },

              // Icon Outline
                {
                  props: { variant: 'icon-outline', color: 'default' },
                  style: {
                    color: `${grey[600]}`,
                    border: `1px solid ${bluegrey[500]}`,
                  },
                },
                {
                  props: { variant: 'icon-outline', color: 'primary' },
                  style: {
                    color: `${primary.main}`,
                    border: `1px solid ${primary.main}`,
                  },
                },
                {
                  props: { variant: 'icon-outline', size: 'small' },
                  style: {
                    minWidth: 30,
                    height: 30,
                    padding: 0
                  }
                },
                {
                  props: { variant: 'icon-outline', size: 'medium' },
                  style: {
                    minWidth: 38,
                    height: 38,
                    padding: 0
                  }
                },
                {
                  props: { variant: 'icon-outline', size: 'large' },
                  style: {
                    minWidth: 42,
                    height: 42,
                    padding: 0
                  }
                },                               
            ]
        },
        MuiButtonGroup: {
          styleOverrides: {
            root: {
              boxShadow: 'none',
            }
          }
        },
        MuiOutlinedInput: {
            styleOverrides: {
              root: {                                
                fieldset: {
                borderColor: `${bluegrey[500]}`, 
                },               
              }
            }
          },
        MuiCheckbox: {
          styleOverrides: {
            root:{              
              color: `${bluegrey[500]}`, 
            }
          }
        },
        MuiDialog:{
          styleOverrides: {          
            root:{
              '& .MuiBackdrop-root': {
                backgroundColor: 'rgba(54, 74, 99, 0.5)'
              },
              '& .MuiDialogTitle-root':{
                display: 'flex',
                alignItems: 'center',
                fontSize: '18px',                
              },
              '& .dialog-title-action': {
                marginLeft: 'auto',
              },
              '& .MuiDialogActions-root':{
                padding: '30px 16px',
              },
              '& .MuiDialogActions-root>:not(:first-of-type)':{
                marginLeft: '16px',
              }
            },                        
          }
        },
        MuiDrawer: {
          styleOverrides: {          
            root:{
              '& .MuiBackdrop-root': {
                backgroundColor: 'rgba(54, 74, 99, 0.5)'
              },
            }
          }    
        },                                          
        MuiDataGrid: {
          styleOverrides: {
            root: {
              // fontSize: '0.875rem',
              // [theme.breakpoints.down('xl')]: {
              //   fontSize: '0.875rem',
              // },
              // [theme.breakpoints.down('lg')]: {
              //   fontSize: '0.875rem',
              // },        
              // [theme.breakpoints.down('md')]: {
              //   fontSize: '1rem', 
              // },
              borderColor: `${bluegrey[500]}`,
             '& .MuiDataGrid-columnHeaders': {
                backgroundColor: `${grey[50]}`, 
                borderColor: `${bluegrey[500]}`,
                textTransform: 'uppercase',
                fontSize: '14px',
                fontWeight: 500,         
             },
             '& .MuiDataGrid-cell':{
                borderColor: `${bluegrey[500]}`,              
             }
            },                  
          }
        },
        MuiTable:{
          styleOverrides:{
            root:{
          
              '& .MuiTableHead-root': {
                backgroundColor:  `${grey[50]}`,                                        
               },
               '& .MuiTableHead-root th': {  
                fontSize: '14px',
                textTransform: 'uppercase',
                borderColor: `${bluegrey[500]}`                        
               },
               '& .MuiTableRow-root td': {
                 borderColor: `${bluegrey[500]}`
               },
              //  '& .MuiTableCell-root': {
              //     fontSize: '1rem',
              //     [theme.breakpoints.down('xl')]: {
              //       fontSize: '0.875rem',
              //     },
              //     [theme.breakpoints.down('lg')]: {
              //       fontSize: '0.875rem',
              //     },        
              //     [theme.breakpoints.down('md')]: {
              //       fontSize: '1rem', 
              //     },
              //  }
            }
          }
        },
        MuiMenu:{
          styleOverrides:{
            root: {
              '& .MuiMenuItem-root': {
                '&:hover':{
                  backgroundColor: `${grey[50]}`,
                },
                '& .MuiSvgIcon-root': {
                  fontSize: 24,
                  marginRight: 16,
                  color: `${grey[600]}`,
                }
              },
              // '& .MuiMenuItem-root.Mui-selected': {
              //   background: `${primary.main}`,
              //   color: `${grey[0]}`,
              // }
            },
          }
        },
        MuiSwitch: {
          styleOverrides: {
            root: {              
              width: '60px',
              height: '36px',
              padding: '5px',
              border: 'none',
                     
              '& .MuiSwitch-thumb': {
                backgroundColor: `${bluegrey[500]}`,
                boxShadow: 'none',
                width: '18px',
                height: '18px',
              },
              '& .MuiSwitch-track': {
                backgroundColor: 'transparent',
                borderRadius: '50px',    
                border: '1px solid',
                borderColor: `${bluegrey[500]}`,
                opacity: '1',
              },
              '& .MuiSwitch-switchBase.Mui-checked': {
                transform: 'translateX(25px)',
              },
              '& .MuiSwitch-switchBase': {
                '&.Mui-checked': {
                  '& .MuiSwitch-thumb': {
                    backgroundColor: `${grey[0]}`,
                  },  
                  '& + .MuiSwitch-track': {
                    backgroundColor: `${primary.main}`,
                    borderColor: `${primary.main}`,
                    border: 0,
                    opacity: 1,
                  },
                  // '&.Mui-disabled + .MuiSwitch-track': {
                  //   opacity: 0.5,
                  // },
                },
                '&.Mui-disabled .MuiSwitch-thumb': {
                  opacity: '0.5',                  
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: '0.5',
                    cursor: 'not-allowed',
                  } 
               },
               '&.MuiSwitch-sizeSmall':{
                  width: '45px',
                  height: '31px',
                 
               },
               '&.MuiSwitch-sizeSmall .MuiSwitch-switchBase.Mui-checked': {
                  transform: 'translateX(14px)',
              },
              '&.MuiSwitch-sizeSmall .MuiSwitch-thumb': {               
                  width: '15px',
                  height: '15px',
              },
              '&.MuiSwitch-sizeSmall .MuiSwitch-switchBase':{
                  padding: '8px',
              }                                              
            }
          }
        },
        MuiChip: {
          variants: [
            {
              props: { variant: 'soft', color: 'default' },
              style: {
                color: `${grey[800]}`,
                backgroundColor: `${grey[100]}`,
                borderRadius: '4px',
              }
            },      
            {
              props: { variant: 'soft', color: 'primary' },
              style: {
                color: `${primary.main}`,
                backgroundColor: `${primary[50]}`,
                borderRadius: '4px',
              }
            },
            {
              props: { variant: 'soft', color: 'success' },
              style: {
                color: `${success[900]}`,
                backgroundColor: `${success[50]}`,
                borderRadius: '4px',              
              }
            },
            {
              props: { variant: 'soft', color: 'warning' },
              style: {
                color: `${warning[900]}`,
                backgroundColor: `${warning[50]}`,
                borderRadius: '4px',           
              }
            },
            {
              props: { variant: 'soft', color: 'info' },
              style: {
                color: `${info[900]}`,
                backgroundColor: `${info[50]}`,
                borderRadius: '4px',
              }
            },
            {
              props: { variant: 'soft', color: 'error' },
              style: {
                color: `${error.main}`,
                backgroundColor: `${error[50]}`,
                borderRadius: '4px',
              }
            },
          ]
        }         
     
    }

})

export default theme;