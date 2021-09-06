import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    showProduct: {
        backgroundColor: '#171717',
        padding: '10px',
        borderRadius: '4px',
    },
    title: {
        color: '#dacb46',
        fontSize: '22px',
        paddingBottom: '4px',
        fontWeight: 300,
      },
    productItem: {
        cursor: 'pointer',
        ' & a': {
            borderRadius: '4px',
            display: 'block',
            width: '100%',
            paddingTop: '60%',
            background: 'no-repeat center / cover',
            cursor: 'pointer',
        },
        '& p': {
            color: '#b8babc',
            fontSize: '14px',
            overflow: 'hidden',
            lineHeight: '2',
            display: '-webkit-box',
            '-webkit-line-clamp': '1',
            '-webkit-box-orient': 'vertical',
        },
        '&:hover p': {
            color: '#dacb46',
        },
        '&:hover a': {
            opacity: '0.7',
        }
  
    }
}));
