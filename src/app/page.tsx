import ImageTextCard from '@/components/pageComp/Image-text-card';
import MapLocation from '@/components/pageComp/Map-Location';
import dynamic from 'next/dynamic';

const Reason = dynamic(() => import('@/components/pageComp/Reason-card'), {
	ssr: false
});
export default function Home() {
	return (
		<main className='mt-[5rem] w-[100vw] flex flex-col items-center'>
			<ImageTextCard />
			<Reason />
			<MapLocation />
		</main>
	);
}
