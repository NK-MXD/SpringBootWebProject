package com.yf.exam.modules.paper.dto.request;

import com.yf.exam.core.api.dto.BaseDTO;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * @author xiaoduo
 */
@Data
@ApiModel(value="更改题目用户分数请求类", description="更改题目用户分数请求类")
public class PaperQuScoreReqDTO extends BaseDTO {

    @ApiModelProperty(value = "试卷ID", required=true)
    private String paperId;

    @ApiModelProperty(value = "题目ID", required=true)
    private String quId;

    @ApiModelProperty(value = "题目分数score", required=true)
    private Integer actualScore;

}
