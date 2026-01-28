import { NextResponse } from 'next/server';
import { JiraClient } from '@/lib/jira';

export async function GET() {
    const jira = new JiraClient();

    // Check Env Vars
    const envStatus = {
        JIRA_DOMAIN: process.env.JIRA_DOMAIN ? 'Set' : 'Missing',
        JIRA_USER_EMAIL: process.env.JIRA_USER_EMAIL ? 'Set' : 'Missing',
        JIRA_API_TOKEN: process.env.JIRA_API_TOKEN ? 'Set' : 'Missing',
    };

    console.log('Test Endpoint - Env Status:', envStatus);

    try {
        const result = await jira.createIssue(
            'Test Issue from Diagnostics',
            'This is a test issue to verify Jira integration logic.'
        );

        if (result) {
            return NextResponse.json({
                success: true,
                message: 'Jira issue created successfully.',
                jiraResponse: result,
                envStatus
            });
        } else {
            return NextResponse.json({
                success: false,
                message: 'Jira issue creation returned null (likely missing credentials check logs).',
                envStatus
            }, { status: 500 });
        }

    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: 'Exception thrown during Jira creation.',
            error: error.message || error.toString(),
            envStatus
        }, { status: 500 });
    }
}
