package com.example.Backend.db;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class SessionRepository {
    public static boolean isValid(String sessionKey) {
         try {
            Connection conn = Connect.connect();
            PreparedStatement preparedStatement = conn.prepareStatement(
                    "SELECT * FROM sessions WHERE session_key = ?"
            );
            preparedStatement.setString(1,sessionKey);

            ResultSet resultSet = preparedStatement.executeQuery();
            resultSet.next(); // if any sessions exist for that key, this will pass
            conn.close();
            return true;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
            return false;
        }
    }
}
