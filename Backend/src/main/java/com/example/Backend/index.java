package com.example.Backend;
import java.util.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class index {
    @GetMapping("/add")
    public int add(@RequestParam int x, @RequestParam int y) {
        return x + y;
    }

    @GetMapping("/readInventory")
    public static String homepage() {
        return "Hello World";
    }
}