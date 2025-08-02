

export default function IsItIglooCode(): JSX.Element {
	const inputDate = new Date("03/26/2024");
	const todaysDate = new Date();
	
	if(inputDate.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0)) {
		return (
			<div className="grid h-screen place-items-center w-screen">
				<div className="w-screen text-xl animate-pulse text-center">yes</div>
			</div>
		);
	}
	
	return (
		<div className="grid h-screen place-items-center w-screen">
			<div className="w-screen text-xl animate-pulse text-center">no</div>
		</div>
	);
}
