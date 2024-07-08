"use client";

import styles from './partnership.module.css';
import { useEffect } from 'react';
import Image from 'next/image';

const slidesData = [ 
    { src: '/assets/partnership/1/1.jpg', description: '' },
    { src: '/assets/partnership/1/2.jpg', description: '' },
    { src: '/assets/partnership/1/3.jpg', description: '' },
    { src: '/assets/partnership/1/4.jpg', description: '' },
    { src: '/assets/partnership/1/5.jpg', description: '' },
    { src: '/assets/partnership/1/6.jpg', description: '' },
    { src: '/assets/partnership/1/7.jpg', description: '' },
    { src: '/assets/partnership/1/8.jpg', description: '' },
    { src: '/assets/partnership/1/9.jpg', description: '' },
    { src: '/assets/partnership/1/10.jpg', description: '' },
    { src: '/assets/partnership/1/11.jpg', description: '' },
    { src: '/assets/partnership/1/12.jpg', description: '' },
    { src: '/assets/partnership/1/13.jpg', description: '' },
    { src: '/assets/partnership/1/14.jpg', description: '' },
    { src: '/assets/partnership/1/15.jpg', description: '' },
    { src: '/assets/partnership/1/16.jpg', description: '' },
    { src: '/assets/partnership/1/17.jpg', description: '' },
];

const slidesData1 = [
    { src: '/assets/partnership/2/1.jpg', description: '' },
    { src: '/assets/partnership/2/2.jpg', description: '' },
    { src: '/assets/partnership/2/3.jpg', description: '' },
    { src: '/assets/partnership/2/4.jpg', description: '' },
    { src: '/assets/partnership/2/5.jpg', description: '' },
    { src: '/assets/partnership/2/6.jpg', description: '' },
    { src: '/assets/partnership/2/7.jpg', description: '' },
    { src: '/assets/partnership/2/8.jpg', description: '' },
    { src: '/assets/partnership/2/9.jpg', description: '' },
    { src: '/assets/partnership/2/10.jpg', description: '' },
    { src: '/assets/partnership/2/11.jpg', description: '' },
    { src: '/assets/partnership/2/12.jpg', description: '' },
    { src: '/assets/partnership/2/13.jpg', description: '' },
    { src: '/assets/partnership/2/14.jpg', description: '' },
    { src: '/assets/partnership/2/15.jpg', description: '' },
    { src: '/assets/partnership/2/16.jpg', description: '' },
    { src: '/assets/partnership/2/17.jpg', description: '' },
    { src: '/assets/partnership/2/18.jpg', description: '' },
];
 
function Partnership() {
    useEffect(() => {
        const populateCarouselTrack = (trackClass: string, slides: { src: string, description: string }[]) => {
            const carouselTrack = document.querySelector(`.${trackClass}`) as HTMLElement;
            if (!carouselTrack) return;

            const createSlide = ({ src, description }: { src: string, description: string }) => {
                const slideElement = document.createElement('div');
                slideElement.className = styles.slide;

                const imgElement = document.createElement('img');
                imgElement.src = src;
                imgElement.alt = description;
                // imgElement.style.width = '200px';
                // imgElement.style.height = '163px';

                const overlayElement = document.createElement('div');
                overlayElement.className = styles.overlay;
                overlayElement.textContent = description;

                slideElement.append(imgElement, overlayElement);

                return slideElement;
            };

            const fragment = document.createDocumentFragment();
            slides.forEach(slide => fragment.appendChild(createSlide(slide)));
            slides.forEach(slide => fragment.appendChild(createSlide(slide))); 

            carouselTrack.appendChild(fragment);

            const slideWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--slide-width'));
            const gapWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--gap-width'));
            const totalWidth = (slideWidth + gapWidth) * slides.length;
            const duplicatedTotalWidth = totalWidth * 2;
            const halfTotalWidth = duplicatedTotalWidth / 2;

            carouselTrack.style.setProperty('--total-width', `${halfTotalWidth}px`);

            const baseDuration = 40; 
            const baseWidth = 5000; 
            const scrollDuration = (halfTotalWidth / baseWidth) * baseDuration;

            carouselTrack.style.setProperty('--scroll-duration', `${scrollDuration}s`);
        };

        if (document.readyState === 'complete') {
            populateCarouselTrack(styles.carouselTrack, slidesData);
            populateCarouselTrack(styles.carouselTrack1, slidesData1);
        } else {
            window.addEventListener('load', () => {
                populateCarouselTrack(styles.carouselTrack, slidesData);
                populateCarouselTrack(styles.carouselTrack1, slidesData1);
            });
        }
    }, []);

    return (
        <div className={styles.partnership}>
            <div className={styles.partnership__titleCont}>
                <p className={styles.partnership__title}>Нам доверяют</p>
            </div>
            <div className={styles.carousel} aria-live="polite" aria-label="Image Carousel">
                <div className={styles.carouselTrack}></div>
            </div>
            <div className={styles.carousel1} aria-live="polite" aria-label="Image Carousel">
                <div className={styles.carouselTrack1}></div>
            </div>
            <p className={styles.partnership__description}>Ценности нашей компании это долгосрочное и плодотворное партнёрство.</p>

            <div className={styles.partnership__cont}>
                <div className={styles.partnership__cont__logo}>
                    <Image src={'/assets/img/name_withpurple.jpg'} alt='logo' width={400} height={102.47}/>
                </div> 
                <div className={styles.partnership__cont__btn}>
                    <Image src={'/assets/img/instagram.jpg'} alt='logo' width={72.47} height={72.47}/>
                    <div className={styles.partnership__cont__desc}>
                        <p>Детальнее работы в ленте instagram нашего агенства </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Partnership;
