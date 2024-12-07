import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const teams = [
  {
    id: 1,
    name: 'Worship Team',
    members: 12,
    capacity: 15,
    status: 'active',
  },
  {
    id: 2,
    name: 'Children\'s Ministry',
    members: 8,
    capacity: 10,
    status: 'recruiting',
  },
  {
    id: 3,
    name: 'Welcome Team',
    members: 6,
    capacity: 8,
    status: 'active',
  },
  {
    id: 4,
    name: 'Tech Team',
    members: 4,
    capacity: 6,
    status: 'recruiting',
  },
];

export default function VolunteersTeams() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Volunteer Teams</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {teams.map((team) => (
            <div key={team.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">{team.name}</h4>
                <Badge variant={team.status === 'recruiting' ? 'secondary' : 'default'}>
                  {team.status === 'recruiting' ? 'Recruiting' : 'Active'}
                </Badge>
              </div>
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>{team.members} members</span>
                <span>{team.members}/{team.capacity}</span>
              </div>
              <Progress value={(team.members / team.capacity) * 100} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}