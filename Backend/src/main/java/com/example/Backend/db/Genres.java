package com.example.Backend.db;

import com.example.Backend.core.Story;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class Genres {

    public static List<Story> allGenres() {
        try{
            Connection c = connect();
            PreparedStatement st = c.prepareStatement("SELECT * FROM genre;");
            ResultSet rs = st.executeQuery();
            ArrayList<Genre> allgenres = new ArrayList<Genre>();
            while (rs.next()) {
                String titles = rs.getString("story_title");
                allgenres.add(new Genre(
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
            return allgenres;
        }
        catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
            return null;
        }
    }
}
