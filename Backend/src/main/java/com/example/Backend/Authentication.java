package com.example.Backend;

import java.sql.Connection;
import java.sql.DriverManager;
import java.util.*;

import com.example.Backend.core.User;
import org.springframework.web.bind.annotation.*;
import org.mindrot.jbcrypt.BCrypt;

public class Authentication {
//    GETS THE CONNECTION
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

////    BCRYPTING
//    @Value("${app.salt}")
//    private String salt;
//    public static void bcryptPasswords(String password){
//        String password_hash = BCrypt.hashpw(password, salt);
//        String passwordGiven = BCrypt.checkpw(password, salt);
//        try{
//            Connection c = connect();
//            PreparedStatement st = c.prepareStatement("SELECT * FROM users;");
//            ResultSet rs = st.executeQuery();
//            ArrayList<User> allusers = new ArrayList<User>();
//            while (rs.next()) {
//                String titles = rs.getString("story_title");
//                allusers.add(new User(
//                        rs.getInt("id"),
//                        rs.getString("username"),
//                        rs.getString("password_hash"),
//                        rs.getString("profile_picture"),
//                        rs.getString("profile_summary"),
//                ));
//                // ABOVE PARENTHESES() GETS SQL COLUMN NAMES
//            }
//            return allusers;
//        }
//        catch (Exception e) {
//            e.printStackTrace();
//            System.err.println(e.getClass().getName()+": "+e.getMessage());
//            System.exit(0);
//            return null;
//        }
//        if (originalpasswordhashfromPostgres.equal(passwordGiven)) {
//
//        }
//    }
}
