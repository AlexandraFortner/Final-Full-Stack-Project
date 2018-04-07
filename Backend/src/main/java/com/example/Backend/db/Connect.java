package com.example.Backend.db;

import java.sql.Connection;
import java.sql.DriverManager;

public class Connect {

    public static Connection connect() {
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
}
