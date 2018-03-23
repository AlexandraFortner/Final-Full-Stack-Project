package com.example.Backend;

import java.util.*;

import com.example.Backend.core.Story;
import org.springframework.web.bind.annotation.*;
import org.mindrot.jbcrypt.BCrypt;

public class Authentication {
    @Value("${app.salt}")
    private String salt;
    public static void bcryptPasswords(String password){
        String password_hash = BCrypt.hashpw(password, salt);
        String passwordGiven = BCrypt.checkpw(password, salt);
        try{
            Connection c = connect();
            PreparedStatement st = c.prepareStatement("SELECT * FROM users;");
            ResultSet rs = st.executeQuery();
            ArrayList<User> allstories = new ArrayList<User>();
            while (rs.next()) {
                String titles = rs.getString("story_title");
                allstories.add(new Story(
                        rs.getInt("id"),
                        rs.getInt("story_author_id"),
                        rs.getString("story_title"),
                        rs.getDate("story_date"),
                        rs.getString("profile_summary"),
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
        if (originalpasswordhashfromPostgres.equal(passwordGiven)) {

        }
    }
}
