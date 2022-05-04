
export const useStyles = {
    root: {
        background: '#171717',
        height: '198px',
        width: '100%',
        padding: '22px 30px 28px 29px',
        color: '#ffffff',
        overflow: 'auto',
        margin: '20px 0 20px 0',
        '::-webkit-scrollbar': {
            display: 'none',
        },
        borderRadius: '5px',
    },
    mapBox: {
        marginRight: '44px',
        marginBottom: '20px',
    },
    map: {
        borderRadius: '5px',
    },

    details: {
        '& .MuiGrid-root': {
            marginBottom: '8px',
        }
    },

    city: {
        background: '#000000',
        borderRadius: '5px',
        padding: '10px',
        marginRight: '10px',
        marginTop: '15px',
    },

    state: {
        background: '#000000',
        borderRadius: '5px',
        padding: '10px',
        marginTop: '15px',
    }
}