import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const categories = [
  {
    name: 'General Fund',
    current: 15750,
    target: 20000,
    percentage: 78.75,
  },
  {
    name: 'Building Fund',
    current: 8500,
    target: 15000,
    percentage: 56.67,
  },
  {
    name: 'Missions',
    current: 4200,
    target: 5000,
    percentage: 84,
  },
  {
    name: 'Youth Ministry',
    current: 2800,
    target: 3000,
    percentage: 93.33,
  },
];

export default function DonationsSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Donations by Category</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {categories.map((category) => (
            <div key={category.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{category.name}</span>
                <span className="text-muted-foreground">
                  ${category.current.toLocaleString()} / ${category.target.toLocaleString()}
                </span>
              </div>
              <Progress value={category.percentage} />
              <p className="text-sm text-muted-foreground">
                {category.percentage}% of target
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}