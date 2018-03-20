package com.example.Backend.db;

import java.util.List;
import com.example.backend.core.Story;

public class Stories {

        public static List<Story> all() {
            // connect
            // SELECT * FROM stories;
            // return fetchall();
        }

        public static void create(Story p) {
            // connect
            // prepare statement
            // INSERT INTO .....
            // execute
        }

        public static List<Story> allGenres() {
            // connect
            // SELECT * FROM genre;
            // return fetchall();
        }
}
