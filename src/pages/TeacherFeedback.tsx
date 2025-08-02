import { useEffect } from 'react'

export default function TeacherFeedback(): JSX.Element {
	useEffect(() => {
		window.location.href = 'https://tally.so/r/mZ8ape';
	}, []);

	return (
		<div className="min-h-screen bg-zinc-900 flex items-center justify-center">
			<div className="text-center">
				<h1 className="font-mono text-white text-4xl mb-4">Redirecting...</h1>
				<p className="font-mono text-gray-400">You will be redirected to the teacher feedback form.</p>
			</div>
		</div>
	);
}
