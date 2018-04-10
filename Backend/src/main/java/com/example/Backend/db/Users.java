package com.example.Backend.db;

import com.example.Backend.core.User;
import com.example.Backend.db.Connect;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class Users {

    public static List<User> all() {
        try{
            Connection c = Connect.connect();
            PreparedStatement st = c.prepareStatement("SELECT * FROM users;");
            ResultSet rs = st.executeQuery();
            ArrayList<User> allusers = new ArrayList<User>();
            while (rs.next()) {
                allusers.add(new User(
                        rs.getInt("id"),
                        rs.getString("username"),
                        rs.getString("password_hash")
                ));
                // ABOVE PARENTHESES() GETS SQL COLUMN NAMES
            }
            return allusers;
        }
        catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
            return null;
        }
    }

    public static User insertUser(String username, String password_hash){
        try {
            Connection conn = Connect.connect();
            PreparedStatement preparedStatement = conn.prepareStatement(
                    "INSERT INTO users(" +
                            "username, password_hash) " +
                            "VALUES (?,?) returning *;");
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
