import zoaImg from '../assets/images/zoa.jpg';
import sdsImg from '../assets/images/sds.png';
import toolImg from '../assets/images/tool.png';
import forexImg from '../assets/images/Forex-Source.png';
import tryboostingImg from '../assets/images/tryboosting.png';
import pngtotextImg from '../assets/images/pngtotext.png';
import estorefoamImg from '../assets/images/estorefoam.png';
import cushcoreImg from '../assets/images/cushcore.png';
import musafirImg from '../assets/images/musafir.png'
import beatsImg from '../assets/images/beats.png'

const projectImages = [
  toolImg,
  sdsImg,
  zoaImg,
  cushcoreImg,
  tryboostingImg,
  pngtotextImg,
  estorefoamImg,
  forexImg,
  musafirImg,
  beatsImg,
];

export const preloadProjectsImages = () => {
  projectImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};
