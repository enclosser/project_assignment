export interface MainData {
	message: string;
}

export const getMainData = (): Promise<MainData> => {
	return Promise.resolve({
		message: 'PROMISE RESOLVED: Main Data',
	});
};