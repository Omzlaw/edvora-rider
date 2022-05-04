export const useStyles = {
    root: {
        margin: "31px 0 30px 34px",
    },
    tabs: {

        '& .MuiTab-root': {
            color: '#d0cbcb',
        },
        '& .Mui-selected': {
            color: '#ffffff !important',
        },
    },

    filter: {
        margin: "12px 52px 0px 16px",
        cursor: 'pointer',
    },

    tabPanel: {
        height: '35em',
        margin: "24px 52px 30px 16px",
        overflow: 'auto',
        '::-webkit-scrollbar': {
            display: 'none',
        },
    }
}