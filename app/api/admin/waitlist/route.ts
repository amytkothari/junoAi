import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    // Check for API key in headers for basic auth
    const apiKey = request.headers.get('x-api-key');
    if (apiKey !== process.env.ADMIN_API_KEY) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const supabase = createServerSupabaseClient();

    // Get total count
    const { count: totalCount, error: countError } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.error('Count error:', countError);
      return NextResponse.json(
        { error: 'Failed to get count' },
        { status: 500 }
      );
    }

    // Get recent signups (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    const { count: recentCount, error: recentError } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', sevenDaysAgo.toISOString());

    if (recentError) {
      console.error('Recent count error:', recentError);
    }

    // Get all waitlist entries for admin (limited to first 1000)
    const { data: waitlistData, error: dataError } = await supabase
      .from('waitlist')
      .select('email, created_at, source')
      .order('created_at', { ascending: false })
      .limit(1000);

    if (dataError) {
      console.error('Data error:', dataError);
      return NextResponse.json(
        { error: 'Failed to get waitlist data' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      stats: {
        total: totalCount || 0,
        recent: recentCount || 0,
      },
      waitlist: waitlistData,
      message: 'Waitlist data retrieved successfully'
    });

  } catch (error) {
    console.error('Admin API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
