import { writable } from 'svelte/store';
export type AlertType = 'default' | 'info' | 'error' | 'danger' | 'success' | 'warning';

export interface Alert {
	id: number;
	title?: string;
	message: string;
	type: AlertType;
	selfDismissable?: boolean;
	hidden?: boolean;
}

export const alerts = writable<Alert[]>([]);
