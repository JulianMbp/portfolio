import Link from 'next/link';
import YouTubeEmbed from '@/app/components/YouTubeEmbed';

const Video: React.FC = () => {
return (
    <div className='w-[50%] h-[50%] bg-cyan-200 border-2 border-black rounded-xl shadow-2xl shadow-black md:mb-40'>
    <YouTubeEmbed videoId='l2ABZsKHl2Y?si=SqLXAjgMyo2wL9uT' />
    </div>
);
};

export default Video;