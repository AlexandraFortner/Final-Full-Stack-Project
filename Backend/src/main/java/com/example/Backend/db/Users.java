package com.example.Backend.db;

import com.example.Backend.core.User;
import com.example.Backend.dto.NewUser;
import com.example.Backend.db.Connect;
import java.sql.*;
import java.util.*;

public class Users {

    public static List<NewUser> all() {
        try{
            Connection c = Connect.connect();
            PreparedStatement st = c.prepareStatement("SELECT * FROM users;");
            ResultSet rs = st.executeQuery();
            ArrayList<NewUser> allusers = new ArrayList<NewUser>();
            while (rs.next()) {
                allusers.add(new NewUser(
                        rs.getString("username")
                ));
                // ABOVE PARENTHESES() GETS SQL COLUMN NAMES
            }
            return allusers;
        }
        catch (SQLException e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
            return null;
        }
    }

    public static User loginUser(String username, String password_hash){
        try{
            Connection conn = Connect.connect();
            System.out.println(username);
            System.out.println(password_hash);
            PreparedStatement preparedStatement = conn.prepareStatement(
                    "select * from users "+
                            "where username = ? and password_hash = ?;"
            );
            preparedStatement.setString(1,username);
            preparedStatement.setString(2,password_hash);

            ResultSet resultSet = preparedStatement.executeQuery();
            resultSet.next();
            User user =  new User(resultSet.getInt("id"), resultSet.getString("username"),
                    resultSet.getString("password_hash"));
            conn.close();
            return user;
        }
        catch (SQLException e){
//            System.out.println("AGHHGHGHGHHGHGHGH");
            System.out.println(e.getMessage());
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

//    public static boolean deleteUser(NewUser user){
//        try {
//            Connection conn = Connect.connect();
//            PreparedStatement preparedStatement = conn.prepareStatement(
//                    "DELETE FROM users WHERE username = ?"
//            );
//            preparedStatement.setStr(1, NewUser);
//            preparedStatement.execute();
//            conn.close();
//            return true;
//        }
//        catch (SQLException e){
//            System.out.println(e.getMessage());
//            return false;
//        }
//    }

    public static String sessionKey(String u, String pw) {
        try{
//            System.out.println("Username: " + u);
//            System.out.println("Password: " + pw);
            String random_items = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@~$%^&*-";
            String[] random = random_items.split("");
            String sessionKey = "";
            Random r = new Random();
            for (int x = 0; x < 20; x++){
                int randInt = r.nextInt((random.length - 1) + 1);
                sessionKey += random[randInt];
            }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Connection c = Connect.connect();
            User newPerson = loginUser(u, pw);
            if (newPerson != null){
                System.out.println("Success! Session Key NewPerson is: " + newPerson);
                PreparedStatement st = c.prepareStatement("insert into sessions(id," +
                        "session_key) values(?, ?);");
                st.setInt(1, newPerson.id);
                st.setString(2, sessionKey);
//                System.out.println("NEW PERSON ID: " + newPerson.id);
                st.execute();
                st.close();
                c.close();
                return sessionKey;
            } else {
                System.out.println("Failure. Session Key NewPerson is: " + newPerson);
                return null;
            }
        }
        catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
            return null;
        }
    }
}
