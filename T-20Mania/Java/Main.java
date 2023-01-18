import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Team[] teams = {
                new Team("NED", 5, 2, 3, -0.849, 4),
                new Team("BAN", 5, 2, 3, -1.176, 4),
                new Team("ZIM", 5, 1, 3, -1.138, 3),
                new Team("IND", 5, 4, 1, 1.319, 8),
                new Team("PAK", 5, 3, 2, 1.028, 6),
                new Team("SA", 5, 2, 2, 0.874, 5)
        };

        Arrays.sort(teams, (team1, team2) -> {
            if (team1.PTS != team2.PTS) {
                return team2.PTS - team1.PTS;
            } else {
                return (int) Math.round((team2.NRR - team1.NRR) * 1000);
            }
        });

        for (Team team : teams) {
            System.out.println(team.toString());
        }
    }
}

// Team Class
class Team {
    String name;
    int M;
    int W;
    int L;
    double NRR;
    int PTS;

    Team(String name, int m, int w, int l, double NRR, int pts) {
        this.name = name;
        this.M = m;
        this.W = w;
        this.L = l;
        this.NRR = NRR;
        this.PTS = pts;
    }

    @Override
    public String toString() {
        return "Team{" +
                "name='" + name + '\'' +
                ", M=" + M +
                ", W=" + W +
                ", L=" + L +
                ", NRR=" + NRR +
                ", PTS=" + PTS +
                '}';
    }
}