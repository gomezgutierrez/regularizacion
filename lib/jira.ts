export class JiraClient {
    private domain: string;
    private email: string;
    private apiToken: string;
    private projectKey: string;

    constructor() {
        this.domain = process.env.JIRA_DOMAIN || '';
        this.email = process.env.JIRA_USER_EMAIL || '';
        this.apiToken = process.env.JIRA_API_TOKEN || '';
        this.projectKey = 'RM';
    }

    private getAuthHeader() {
        return `Basic ${Buffer.from(`${this.email}:${this.apiToken}`).toString('base64')}`;
    }

    async createIssue(summary: string, description: string) {
        if (!this.domain || !this.email || !this.apiToken) {
            console.error('CRITICAL: Jira credentials missing in environment variables.');
            console.log('JIRA_DOMAIN set:', !!this.domain);
            console.log('JIRA_USER_EMAIL set:', !!this.email);
            console.log('JIRA_API_TOKEN set:', !!this.apiToken);
            return null;
        }

        const url = `https://${this.domain}/rest/api/3/issue`;

        const bodyData = {
            fields: {
                project: {
                    key: this.projectKey,
                },
                summary: summary,
                description: {
                    type: "doc",
                    version: 1,
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                {
                                    type: "text",
                                    text: description,
                                },
                            ],
                        },
                    ],
                },
                issuetype: {
                    name: "Tarea",
                },
            },
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': this.getAuthHeader(),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bodyData),
            });

            if (!response.ok) {
                const errorText = await response.text();
                const safeErrorText = errorText.substring(0, 500); // Truncate to avoid creating massive logs
                console.error(`Jira API Error (${response.status}):`, safeErrorText);
                throw new Error(`Failed to create Jira issue: ${response.status} ${response.statusText} - DETAILS: ${safeErrorText}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error creating Jira issue:', error);
            // We do not throw here to avoid blocking the main flow (email/redirect) if Jira fails
            return null;
        }
    }
}
