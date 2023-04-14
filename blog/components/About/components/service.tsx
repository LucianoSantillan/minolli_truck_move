import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Image, { StaticImageData } from 'next/image';


const Service: React.FunctionComponent<{ imgUrl: StaticImageData, title: string, description: string }> = ({ imgUrl, title, description }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                {/* <CardMedia
          component="img"
          height="140"
          image={embalar}
          alt="green iguana"
        /> */}
                <Image
                    //   className={styles.backgroundImage}
                    height={140}
                    src={imgUrl}
                    style={{ width: '100%' }}
                    alt="Picture of the author"
                    placeholder="blur"
                />
                <CardContent style={{ textAlign: "center" }}>
                    <Typography style={{fontSize: "20px"}} gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Service;