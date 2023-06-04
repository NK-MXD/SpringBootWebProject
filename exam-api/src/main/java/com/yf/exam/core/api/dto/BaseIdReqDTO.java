package com.yf.exam.core.api.dto;

import com.yf.exam.core.api.dto.BaseDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * <p>
 * 主键通用请求类，用于根据ID查询
 * </p>
 *
 * @author  软工小队
 */
@Data
@ApiModel(value="主键通用请求类", description="主键通用请求类")
public class BaseIdReqDTO extends BaseDTO {


    @ApiModelProperty(value = "主键ID", required=true)
    private String id;

    @JsonIgnore
    private String userId;

}
