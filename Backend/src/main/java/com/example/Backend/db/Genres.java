package com.example.Backend.db;

import com.example.Backend.core.Genre;
import java.sql.*;
import java.util.*;
import com.example.Backend.db.Connect;

public class Genres {

//    GETS ALL GENRES
    public static List<Genre> allGenres() {
        try{
            Connection c = Connect.connect();
            PreparedStatement st = c.prepareStatement("SELECT * FROM genre;");
            ResultSet rs = st.executeQuery();
            ArrayList<Genre> allgenres = new ArrayList<Genre>();
            while (rs.next()) {
                allgenres.add(new Genre(
                        rs.getInt("id"),
                        rs.getString("genre_name")
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
