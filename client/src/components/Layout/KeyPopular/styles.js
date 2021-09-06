import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    keyPopular: {
        backgroundColor: '#171717',
        padding: '10px',
        borderRadius: '4px',
    },
    title: {
        color: '#dacb46',
        fontSize: '22px',
        fontWeight: 300,
    },
    tagName: {
        '& a': {
            color: '#ffffff',
            backgroundColor: '#252525',
            textDecoration: 'none',
            paddingRight: '8px',
            display: 'inline-flex',
            alignItems: 'center',
            flex: 1,
            margin: '10px 10px 0 16px ',
            position: 'relative',
            transition: 'all 0.2s linear',
            '&::before': {
                content: "''",
                display: 'block',
                backgroundColor: '#ffffff',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                marginRight: '6px',
            },
            '& p': {
                fontSize: '12px',
                lineHeight: '32px',
            },
            '&::after': {
                content: "''",
                display: 'block',
                position: 'absolute',
                width: '0',
                height: '0',
                left: '-16px',
                borderStyle: 'solid',
                borderWidth: '16px 16px 16px 0',
                borderColor: 'transparent #252525 transparent transparent',
                transition: 'all 0.2s linear',
            },
            '&:hover': {
                backgroundColor: '#555555',
            },
            '&:hover::after': {
                borderColor: 'transparent #555555 transparent transparent',
            }
        }
    }
}))
