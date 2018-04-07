package com.example.Backend.db;

import com.example.Backend.core.User;
import com.example.Backend.db.Connect;
import java.sql.*;

public class Users {

    public static User insertUser(String username, String password_hash){
        try {
            Connection conn = Connect.connect();
            PreparedStatement preparedStatement = conn.prepareStatement(
                    "INSERT INTO users(" +
                            "username, password_hash) " +
                            "VALUES (?,?)");
            preparedStatement.setString(1,username);
            preparedStatement.setString(2,password_hash);

            ResultSet resultSet = preparedStatement.executeQuery();
            resultSet.next();
            conn.close();
            return new User(resultSet.getInt("id"), resultSet.getString("username"),
                    resultSet.getString("password_hash"));
        }
        catch (SQLException e){
            System.out.println(e.getMessage());
            return null;
        }
    }

    public static boolean deleteUser(Integer id){
        try {
            Connection conn = Connect.connect();
            PreparedStatement preparedStatement = conn.prepareStatement(
                    "DELETE FROM users WHERE id = ?"
            );
            preparedStatement.setInt(1, id);
            preparedStatement.execute();
            conn.close();
            return true;

        }
        catch (SQLException e){
            System.out.println(e.getMessage());
            return false;
        }
    }
}
