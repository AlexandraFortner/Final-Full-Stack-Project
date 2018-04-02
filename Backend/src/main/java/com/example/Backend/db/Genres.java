package com.example.Backend.db;

import com.example.Backend.core.Genre;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class Genres {
//        GETS THE CONNECTION
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

    public static List<Genre> allGenres() {
        try{
            Connection c = connect();
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
