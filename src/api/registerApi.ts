export interface RegisterData {
	message: string;
}

export const getRegisterData = (): Promise<RegisterData> => {
	return Promise.resolve({
		message: 'PROMISE RESOLVED: Reg Data',
	});
};