import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Download from 'yet-another-react-lightbox/plugins/download';
// import 'yet-another-react-lightbox/styles.css'; // Убедитесь, что вы импортируете стили
import './yet-another-react-lightbox.css';
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const ImageGallery = ({ imgSrc, images }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex justify-center">
            <img
                src={imgSrc}
                alt="thumbnail"
                onClick={() => setOpen(true)}
                // style={{ cursor: 'pointer', width: '500px', height: '400px' }}
                className="object-cover mb-4 w-[330px] h-[180px] lg:w-[450px] lg:h-[240px] hover:scale-105"
            />
            {open && (
                <Lightbox
                    slides={images}
                    open={open}
                    close={() => setOpen(false)}
                    plugins={[
                        Captions,
                        Fullscreen,
                        Thumbnails,
                        Zoom,
                        Download
                    ]}
                    render={{
                        // Настройка отображения заголовков и описаний
                        header: (currentIndex) => (
                            <div>
                                <h2>{images[currentIndex].title}</h2>
                                <p>{images[currentIndex].description}</p>
                            </div>
                        ),
                    }}
                />
            )}
        </div>
    );
};

export default ImageGallery;