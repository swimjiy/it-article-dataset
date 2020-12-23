export interface IConfig {
	username: string;
	title: string;
	subscription: string;
	tableColumns: IColumns[];
}

export interface IColumns {
	name: string;
	type: 'url' | 'text' | 'tag';
	url?: string;
	tags?: string[];
}
