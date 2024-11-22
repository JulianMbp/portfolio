import Link from 'next/link';
import YouTubeEmbed from '@/app/components/YouTubeEmbed';

const Video: React.FC = () => {
return (
    <div className='w-[70%] md:w-[50%] h-[70%] md:h-[50%] bg-cyan-200 border-2 border-black rounded-xl shadow-2xl shadow-black  md:mb-40'>
        <YouTubeEmbed videoId='Jb0godyqo-s' />
    </div>
);
};

export default Video;