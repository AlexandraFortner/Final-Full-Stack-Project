package com.example.Backend.db;

import java.util.*;

import com.example.Backend.core.Story;
import com.example.Backend.db.Connect;
import com.example.Backend.dto.NewStory;
import java.sql.*;



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

    public static Story create(NewStory newStory) {
        try{
            Connection c = Connect.connect();
            PreparedStatement st = c.prepareStatement("insert into stories(story_author" +
                    "_name, story_title, story, genre_id, story_summary) values(?, ?, ?, ?, ?) RETURNING id, story_date;");
            st.setString(1, newStory.author_name);
            st.setString(2, newStory.title);
            st.setString(3, newStory.story);
            st.setInt(4, newStory.genre_id);
            st.setString(5, newStory.story_summary);
            ResultSet rs = st.executeQuery();
            rs.next();
            Story s = new Story(
                    rs.getInt("id"),
                    newStory.author_name,
                    newStory.title,
                    rs.getDate("story_date"),
                    newStory.story,
                    newStory.genre_id,
                    newStory.story_summary
            );
            st.close();
            c.close();
            return s;
            }
        catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
            return null;
        }
    }

//    public static boolean deleteStory(Story story){
//        try {
//            Connection conn = Connect.connect();
//            PreparedStatement preparedStatement = conn.prepareStatement(
//                    "delete FROM stories WHERE id = ?"
//            );
//            preparedStatement.setString(1,story.id);
//
//            ResultSet resultSet = preparedStatement.executeQuery();
//            resultSet.next(); // if any sessions exist for that key, this will pass
//            conn.close();
//            return true;
//        } catch (SQLException e) {
//            System.out.println(e.getMessage());
//            return false;
//        }
//    }
    //        public static void List<Story> allGenres() {
            // connect
            // SELECT * FROM genre;
            // return fetchall();
//        }
}
