import { Task, TaskStatus } from "@/types";

export const getContext = () => ({ id: "vidsmok4uVBobra", name: "Colin Brooks", userType: "CEO" });

const dataOnly = <T>({ data }: { data: T }): T => data;
// export const getTasks = () => axios.get<Task[]>("/task").then(dataOnly);
// TODO: Mock data while we don't have BE
export const getTasks = () => ([
	{
		id: "1",
		name: "first task",
		createdAt: "29.01.1987",
		lastModified: "12.12.1234",
		priority: "high",
		status: "Accepted",
		syncStatus: "Sep 15, 2021, 10:30 AM",
		requestType: "active",
		serviceRequest: {
			id: "12",
			occurrence: {
				end: "12313",
				start: "123131"
			},
			category: {
				code: "1231",
				display: "Nutrition"
			},
			code: {
				code: "code",
				display: "Bybluk"
			}
		},
		requester: {
			resourceType: "1231",
			id: "13131",
			display: "131313"
		},
		patient: {
			resourceType: "2we2f",
			id: "werwrw",
			display: "Britney Spears"
		},
		consent: "consent",
		comments: [
			{
				author: {
					resourceType: "dahjkhdk",
					id: "dasdasda",
					display: "asdasda"
				},
				time: "123131231",
				text: "31231313"
			}
		],
		outcome: "outcome text",
		statusReason: "Status reason text",
		procedures: [{
			id: "131231",
			display: "1312313"
		}]
	},
	{
		id: "1",
		name: "first task",
		createdAt: "29.01.1987",
		lastModified: "12.12.1234",
		priority: "high",
		status: "Received",
		syncStatus: "Sep 15, 2021, 10:30 AM",
		requestType: "active",
		serviceRequest: {
			id: "12",
			occurrence: {
				end: "12313",
				start: "123131"
			},
			category: {
				code: "1231",
				display: "Nutrition"
			},
			code: {
				code: "code",
				display: "Bybluk"
			}
		},
		requester: {
			resourceType: "1231",
			id: "13131",
			display: "131313"
		},
		patient: {
			resourceType: "2we2f",
			id: "werwrw",
			display: "werwrwerw"
		},
		consent: "consent",
		comments: [
			{
				author: {
					resourceType: "dahjkhdk",
					id: "dasdasda",
					display: "asdasda"
				},
				time: "123131231",
				text: "31231313"
			}
		],
		outcome: "outcome text",
		statusReason: "Status reason text",
		procedures: [{
			id: "131231",
			display: "1312313"
		}]
	},
	{
		id: "1",
		name: "first task",
		createdAt: "29.01.1987",
		lastModified: "12.12.1234",
		priority: "high",
		status: "Received",
		syncStatus: "Sep 15, 2021, 10:30 AM",
		requestType: "active",
		serviceRequest: {
			id: "12",
			occurrence: {
				end: "12313",
				start: "123131"
			},
			category: {
				code: "1231",
				display: "Nutrition"
			},
			code: {
				code: "code",
				display: "Bybluk"
			}
		},
		requester: {
			resourceType: "1231",
			id: "13131",
			display: "131313"
		},
		patient: {
			resourceType: "2we2f",
			id: "werwrw",
			display: "werwrwerw"
		},
		consent: "consent",
		comments: [
			{
				author: {
					resourceType: "dahjkhdk",
					id: "dasdasda",
					display: "asdasda"
				},
				time: "123131231",
				text: "31231313"
			}
		],
		outcome: "outcome text",
		statusReason: "Status reason text",
		procedures: [{
			id: "131231",
			display: "1312313"
		}]
	},
	{
		id: "1",
		name: "first task",
		createdAt: "29.01.1987",
		lastModified: "12.12.1234",
		priority: "high",
		status: "Received",
		syncStatus: "Sep 15, 2021, 10:30 AM",
		requestType: "inactive",
		serviceRequest: {
			id: "12",
			occurrence: {
				end: "12313",
				start: "123131"
			},
			category: {
				code: "1231",
				display: "Nutrition"
			},
			code: {
				code: "code",
				display: "Bybluk"
			}
		},
		requester: {
			resourceType: "1231",
			id: "13131",
			display: "131313"
		},
		patient: {
			resourceType: "2we2f",
			id: "werwrw",
			display: "werwrwerw"
		},
		consent: "consent",
		comments: [
			{
				author: {
					resourceType: "dahjkhdk",
					id: "dasdasda",
					display: "asdasda"
				},
				time: "123131231",
				text: "31231313"
			}
		],
		outcome: "outcome text",
		statusReason: "Status reason text",
		procedures: [{
			id: "131231",
			display: "1312313"
		}]
	},
	{
		id: "1",
		name: "first task",
		createdAt: "29.01.1987",
		lastModified: "12.12.1234",
		priority: "high",
		status: "Received",
		syncStatus: "Sep 15, 2021, 10:30 AM",
		requestType: "inactive",
		serviceRequest: {
			id: "12",
			occurrence: {
				end: "12313",
				start: "123131"
			},
			category: {
				code: "1231",
				display: "Nutrition"
			},
			code: {
				code: "code",
				display: "Bybluk"
			}
		},
		requester: {
			resourceType: "1231",
			id: "13131",
			display: "131313"
		},
		patient: {
			resourceType: "2we2f",
			id: "werwrw",
			display: "werwrwerw"
		},
		consent: "consent",
		comments: [
			{
				author: {
					resourceType: "dahjkhdk",
					id: "dasdasda",
					display: "asdasda"
				},
				time: "123131231",
				text: "31231313"
			}
		],
		outcome: "outcome text",
		statusReason: "Status reason text",
		procedures: [{
			id: "131231",
			display: "1312313"
		}]
	},
	{
		id: "1",
		name: "first task",
		createdAt: "29.01.1987",
		lastModified: "12.12.1234",
		priority: "high",
		status: "Received",
		syncStatus: "Sep 15, 2021, 10:30 AM",
		requestType: "inactive",
		serviceRequest: {
			id: "12",
			occurrence: {
				end: "12313",
				start: "123131"
			},
			category: {
				code: "1231",
				display: "Nutrition"
			},
			code: {
				code: "code",
				display: "Bybluk"
			}
		},
		requester: {
			resourceType: "1231",
			id: "13131",
			display: "131313"
		},
		patient: {
			resourceType: "2we2f",
			id: "werwrw",
			display: "werwrwerw"
		},
		consent: "consent",
		comments: [
			{
				author: {
					resourceType: "dahjkhdk",
					id: "dasdasda",
					display: "asdasda"
				},
				time: "123131231",
				text: "31231313"
			}
		],
		outcome: "outcome text",
		statusReason: "Status reason text",
		procedures: [{
			id: "131231",
			display: "1312313"
		}]
	}
]);

