const MuiMenuItem = {
    root: {
        color: '#030c17',
        fontWeight: 'normal',
        letterSpacing: 0.2,
        lineHeight: '20px',
        fontSize: 14,
        padding: '6px 12px',
        height: 'none',
        "&$selected": {
            backgroundColor: 'rgba(0,109,204,0.08) !important',
        },
        "&$focused": {
            backgroundColor: 'rgba(0,109,204,0.08) !important',
        },
        "&$hover": {
            backgroundColor: 'rgba(0,109,204,0.08) !important',
        }
    },
    
}

export default MuiMenuItem;