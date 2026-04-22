import java.sql.*;
import java.util.Scanner;

public class MoodLogsCRUD {

    static final String URL = "jdbc:mysql://localhost:3306/music_recom_db";
    static final String USER = "root";
    static final String PASS = "Tanishka0107"; // change this

    public static void main(String[] args) {

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection con = DriverManager.getConnection(URL, USER, PASS);
            Scanner sc = new Scanner(System.in);

            while (true) {
                System.out.println("\n--- MUSIC MOOD SYSTEM ---");
                System.out.println("1. Add Mood");
                System.out.println("2. Update Mood");
                System.out.println("3. Delete Mood");
                System.out.println("4. Show All");
                System.out.println("5. Exit");

                System.out.print("Choice: ");
                int ch = sc.nextInt();

                switch (ch) {

                    case 1:
                        sc.nextLine();
                        System.out.print("Enter User ID: ");
int userId = sc.nextInt();
sc.nextLine(); // IMPORTANT

System.out.print("Enter Mood: ");
String mood = sc.nextLine();

System.out.print("Enter Activity: ");
String activity = sc.nextLine();

                      PreparedStatement ps = con.prepareStatement(
    "INSERT INTO mood_logs (user_id, mood, activity) VALUES (?, ?, ?)"
);

                        ps.setInt(1, userId);
ps.setString(2, mood);
ps.setString(3, activity);
                        ps.executeUpdate();
                        System.out.println("Added!");
                        break;

                    case 2:
                        System.out.print("Enter Log ID to update: ");
                        int id = sc.nextInt();
                        sc.nextLine();

                        System.out.print("New Mood: ");
                        String newMood = sc.nextLine();

                        PreparedStatement ps2 = con.prepareStatement(
                            "UPDATE mood_logs SET mood=? WHERE log_id=?"
                        );

                        ps2.setString(1, newMood);
                        ps2.setInt(2, id);

                        ps2.executeUpdate();
                        System.out.println("Updated!");
                        break;

                    case 3:
                        System.out.print("Enter Log ID to delete: ");
                        int did = sc.nextInt();

                        PreparedStatement ps3 = con.prepareStatement(
                            "DELETE FROM mood_logs WHERE log_id=?"
                        );

                        ps3.setInt(1, did);

                        ps3.executeUpdate();
                        System.out.println("Deleted!");
                        break;

                    case 4:
                        Statement stmt = con.createStatement();
                        ResultSet rs = stmt.executeQuery("SELECT * FROM mood_logs");

                        System.out.println("\nID | UserID | Mood | Activity");

                        while (rs.next()) {
                            System.out.println(
                               rs.getInt("log_id") + " | " +
                               rs.getInt("user_id") + " | " +
                               rs.getString("mood") + " | " +
                              rs.getString("activity")
                          );
                        }
                        break;

                    case 5:
                        con.close();
                        sc.close();
                        System.exit(0);
                }
            }

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}