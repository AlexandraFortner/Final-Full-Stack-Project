package com.example.Backend.db;

import java.util.*;
import com.example.Backend.core.Story;
import java.sql.*;
import lombok.*;

public class Stories {

        private static Connection connect() {
            try {
                return DriverManager.getConnection(
                    "jdbc:postgresql:NovaDatabase", "basecamp", "pgpass");
            }
            catch (Exception e) {
                e.printStackTrace();
                System.err.println(e.getClass().getName()+": "+e.getMessage());
                System.exit(0);
                return null;
            }
        }

        public static List<Story> all() {
            try{
                Connection c = connect();
                PreparedStatement st = c.prepareStatement("SELECT * FROM stories;");
                ResultSet rs = st.executeQuery();
                ArrayList<Story> allstories = new ArrayList<Story>();
                while (rs.next()) {
                    String titles = rs.getString("story_title");
                    allstories.add(new Story(
                            rs.getInt("id"),
                            rs.getInt("story_author_id"),
                            rs.getString("story_title"),
                            rs.getDate("story_date"),
                            rs.getString("story"),
                            rs.getInt("genre_id"),
                            rs.getInt("votes")
                    ));
                    // ABOVE PARENTHESES() GETS SQL COLUMN NAMES
            }
            return allstories;
        }
        catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
            return null;
        }
    }

            public static void create(Integer story_author_id, String story_title, String story_date, String story, Integer genre_id, Integer votes) {
                try{
                    Connection c = connect();
                    PreparedStatement st = c.prepareStatement("insert into stories(story_author" +
                            "_id, story_title, story_date, story, genre_id, votes) values("  + story_author_id + "," +
                            story_title + "," + story_date + "," + story + "," + genre_id + "," + votes +");");
                    st.execute();
                    }
                catch (Exception e) {
                    e.printStackTrace();
                    System.err.println(e.getClass().getName()+": "+e.getMessage());
                    System.exit(0);
                }
        }
//        public static void List<Story> allGenres() {
            // connect
            // SELECT * FROM genre;
            // return fetchall();
//        }
}
