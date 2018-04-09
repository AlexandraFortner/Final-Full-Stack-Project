package com.example.Backend.db;

import java.util.*;

import com.example.Backend.core.Story;
import com.example.Backend.db.Connect;
import java.sql.*;

    public Story story;

    public Stories(Story story) {
        this.story = story;
    }

public class Stories {
    public static List<Story> all() {
        try{
            Connection c = Connect.connect();
            PreparedStatement st = c.prepareStatement("SELECT * FROM stories order by story_date desc;");
            ResultSet rs = st.executeQuery();
            ArrayList<Story> allstories = new ArrayList<Story>();
            while (rs.next()) {
                allstories.add(new Story(
                        rs.getInt("id"),
                        rs.getString("story_author_name"),
                        rs.getString("story_title"),
                        rs.getDate("story_date"),
                        rs.getString("story"),
                        rs.getInt("genre_id"),
                        rs.getString("story_summary")
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

            public void create() {
                try{
                    Connection c = Connect.connect();
                    PreparedStatement st = c.prepareStatement("insert into stories(story_author" +
                            "_name, story_title, story, genre_id, story_summary) values(?, ?, ?, ?, ?);");
                    st.setString(1, this.story.author_name);
                    st.setString(2, this.story.title);
                    st.setString(3, this.story.story);
                    st.setInt(4, this.story.genre_id);
                    st.setString(6, this.story.story_summary);
                    System.out.println(st.executeUpdate());
                    st.close();
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
