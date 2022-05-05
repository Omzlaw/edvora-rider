
export const useStyles = {
    root: {
        color: '#ffffff',
    },

    filterCard: {
        width: '228px',
        height: '250px',
        background: '#131313',
        borderRadius: '15px',
        padding: '23px 30px 23px 30px',
        color: '#ffffff',
        overflowY: 'auto',
        display: 'flex',
        overflow: 'wrap',

        '::-webkit-scrollbar': {
            display: 'none',
        },

        '& .MuiDivider-root': {
            borderColor: '#ffffff',
            marginTop: '5px',
        },

    },

    dropdown: {
      marginTop: '20px',

      '& .MuiFormControl-root': {
          marginTop: '5px',
          marginBottom: '5px',
      }
    }

}