package com.example.demo.user.application;

import com.example.demo.objects.entity.Application;
import com.example.demo.utils.Response;

public interface UserApplicationService {
    Response getProgramsByKeyword(String schoolKeyword, String programKeyword);
    Response getAllInstitutions();
    Response uploadApplicationResult(Application application);
}
