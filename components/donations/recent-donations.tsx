import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const recentDonations = [
  {
    id: 1,
    donor: 'Sarah Johnson',
    amount: '$250.00',
    date: '2024-04-10',
    type: 'Tithe',
    status: 'completed',
  },
  {
    id: 2,
    donor: 'Michael Chen',
    amount: '$100.00',
    date: '2024-04-09',
    type: 'Building Fund',
    status: 'completed',
  },
  {
    id: 3,
    donor: 'Emma Wilson',
    amount: '$75.00',
    date: '2024-04-09',
    type: 'Missions',
    status: 'completed',
  },
  {
    id: 4,
    donor: 'James Brown',
    amount: '$500.00',
    date: '2024-04-08',
    type: 'General Fund',
    status: 'completed',
  },
];

export default function RecentDonations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Donations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {recentDonations.map((donation) => (
            <div
              key={donation.id}
              className="flex items-center justify-between space-x-4"
            >
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>
                    {donation.donor
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">
                    {donation.donor}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(donation.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-medium">{donation.amount}</p>
                  <p className="text-sm text-muted-foreground">{donation.type}</p>
                </div>
                <Badge variant="secondary">{donation.status}</Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}