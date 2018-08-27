<template>
	<div class="main">
			<!-- MAIN CONTENT -->
			<div class="main-content">
				<div class="container-fluid" style="height: 100%">
					<div class="panel panel-profile" style="height: 100%">
						<div class="clearfix">
							<!-- LEFT COLUMN -->
							<div class="profile-left">
								<!-- PROFILE HEADER -->
								<div class="profile-header">
									<div class="overlay"></div>
									<div class="profile-main">
										<img src="~/assets/images/user-medium.png" class="img-circle" alt="Avatar">
										<h3 class="name">aikeri</h3>
										<span class="online-status status-available">Available</span>
									</div>
									<div class="profile-stat">
										<div class="row">
											<div class="col-md-3 stat-item">
												<span>原创</span>45 
											</div>
											<div class="col-md-3 stat-item">
												<span>粉丝</span>15 
											</div>
											<div class="col-md-3 stat-item">
												<span>评论</span>70 
											</div>
											<div class="col-md-3 stat-item">
												<span>总浏览</span>2174 
											</div>
										</div>
									</div>
								</div>
								<!-- END PROFILE HEADER -->
								<!-- PROFILE DETAIL -->
								<div class="profile-detail">
									<div class="profile-info">
										<h4 class="heading">基本信息</h4>
										<ul class="list-unstyled list-justify">
											<li>生日 <span>2010/08/21</span></li>
											<li>手机 <span>(124) 823409234</span></li>
											<li>Email <span>samuel@mydomain.com</span></li>
											<!-- <li>个人网站 <span><a href="#">www.themeineed.com</a></span></li> -->
										</ul>
									</div>
									<!-- <div class="profile-info">
										<h4 class="heading">Social</h4>
										<ul class="list-inline social-icons">
											<li><a href="#" class="facebook-bg"><i class="fa fa-facebook"></i></a></li>
											<li><a href="#" class="twitter-bg"><i class="fa fa-twitter"></i></a></li>
											<li><a href="#" class="google-plus-bg"><i class="fa fa-google-plus"></i></a></li>
											<li><a href="#" class="github-bg"><i class="fa fa-github"></i></a></li>
										</ul>
									</div>
									<div class="profile-info">
										<h4 class="heading">关于</h4>
										<p>Interactively fashion excellent information after distinctive outsourcing.</p>
									</div> -->
									<!-- <div class="text-center"><a href="#" class="btn btn-primary">编辑</a></div> -->
								</div>
								<!-- END PROFILE DETAIL -->
							</div>
							<!-- END LEFT COLUMN -->
							<!-- RIGHT COLUMN -->
							<div class="profile-right" style="height: 100%">
								<!-- TABBED CONTENT -->
								<div class="custom-tabs-line tabs-line-bottom left-aligned">
									<ul class="nav" role="tablist">
										<li class="active"><a href="#tab-bottom-left1" role="tab" data-toggle="tab">博客<span class="badge">7</span></a></li>
										<li><a href="#tab-bottom-left2" role="tab" data-toggle="tab">分类管理 </a></li>
									</ul>
								</div>
								<div class="tab-content">
									<div class="tab-pane fade in active" id="tab-bottom-left1">
										<div class="table-responsive">
											<table class="table project-table">
												<thead>
													<tr>
														<th>标题</th>
														<th>创建时间</th>
														<th>阅读数</th>
														<th>评论数</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td><a href="#">世界这么大我想去看看</a></td>
														<td>
															<!-- <div class="progress">
																<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
																	<span>60% Complete</span>
																</div>
															</div> -->
															2018/08/23 20:45:23
														</td>
														<td><!-- <img src="~/assets/images/user2.png" alt="Avatar" class="avatar img-circle">  --><a href="#">Michael</a></td>
														<td><span class="label label-success">ACTIVE</span></td>
													</tr>
													<tr>
														<td><a href="#">面向大海，春暖花开</a></td>
														<td>
															<!-- <div class="progress">
																<div class="progress-bar" role="progressbar" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100" style="width: 33%;">
																	<span>33% Complete</span>
																</div>
															</div> -->
															2018/08/23 20:45:23
														</td>
														<td> <a href="#">Antonius</a></td>
														<td><span class="label label-warning">PENDING</span></td>
													</tr>
													<tr>
														<td><a href="#">Project 123GO</a></td>
														<td>
															<!-- <div class="progress">
																<div class="progress-bar" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" style="width: 68%;">
																	<span>68% Complete</span>
																</div>
															</div> -->
															2018/08/23 20:45:23
														</td>
														<td> <a href="#">Antonius</a></td>
														<td><span class="label label-success">ACTIVE</span></td>
													</tr>
													<tr>
														<td><a href="#">Wordpress Theme</a></td>
														<td>
															<!-- <div class="progress">
																<div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;">
																	<span>75%</span>
																</div>
															</div> -->
															2018/08/23 20:45:23
														</td>
														<td> <a href="#">Michael</a></td>
														<td><span class="label label-success">ACTIVE</span></td>
													</tr>
													<tr>
														<td><a href="#">Project 123GO</a></td>
														<td>
															<!-- <div class="progress">
																<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;">
																	<span>100%</span>
																</div>
															</div> -->
															2018/08/23 20:45:23
														</td>
														<td><a href="#">Antonius</a></td>
														<td><span class="label label-default">CLOSED</span></td>
													</tr>
													<tr>
														<td><a href="#">Redesign Landing Page</a></td>
														<td>
															<!-- <div class="progress">
																<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;">
																	<span>100%</span>
																</div>
															</div> -->
															2018/08/23 20:45:23
														</td>
														<td> <a href="#">Jason</a></td>
														<td><span class="label label-default">CLOSED</span></td>
													</tr>													
												</tbody>
											</table>
										</div>
										
										<!-- <div class="margin-top-30 text-center"><a href="#" class="btn btn-default">See all activity</a></div> -->
									</div>
									<div class="tab-pane fade" id="tab-bottom-left2">
										<ul class="list-unstyled activity-timeline">
											<li>
												<!-- <i class="fa fa-comment activity-icon"></i> -->
												<p><a href="#">Java</a> <span class="timestamp">这个人很懒，没有简介</span></p>
											</li>
											<li>
												<!-- <i class="fa fa-cloud-upload activity-icon"></i> -->
												<p><a href="#">Javascript</a> <span class="timestamp">这个人很懒，没有简介</span></p>
											</li>
											<li>
												<!-- <i class="fa fa-plus activity-icon"></i> -->
												<p><a href="#">SQL</a><span class="timestamp">这个人很懒，没有简介</span></p>
											</li>
											<li>
												<!-- <i class="fa fa-check activity-icon"></i> -->
												<p><a href="#">Groovy</a> <span class="timestamp">这个人很懒，没有简介</span></p>
											</li>
										</ul>
									</div>
								</div>
								<!-- END TABBED CONTENT -->
								<!-- <h4 class="heading">Samuel's Awards</h4> -->
								<!-- AWARDS -->
								<!-- <div class="awards">
									<div class="row">
										<div class="col-md-3 col-sm-6">
											<div class="award-item">
												<div class="hexagon">
													<span class="lnr lnr-sun award-icon"></span>
												</div>
												<span>Most Bright Idea</span>
											</div>
										</div>
										<div class="col-md-3 col-sm-6">
											<div class="award-item">
												<div class="hexagon">
													<span class="lnr lnr-clock award-icon"></span>
												</div>
												<span>Most On-Time</span>
											</div>
										</div>
										<div class="col-md-3 col-sm-6">
											<div class="award-item">
												<div class="hexagon">
													<span class="lnr lnr-magic-wand award-icon"></span>
												</div>
												<span>Problem Solver</span>
											</div>
										</div>
										<div class="col-md-3 col-sm-6">
											<div class="award-item">
												<div class="hexagon">
													<span class="lnr lnr-heart award-icon"></span>
												</div>
												<span>Most Loved</span>
											</div>
										</div>
									</div>
									<div class="text-center"><a href="#" class="btn btn-default">See all awards</a></div>
								</div> -->
								<!-- END AWARDS -->
							</div>
							<!-- END RIGHT COLUMN -->
						</div>
					</div>
				</div>
			</div>
			<!-- END MAIN CONTENT -->
		</div>
</template>
<script type="text/javascript">
	export default{

	}
</script>
<style type="text/css">
	.main-content{
		height: 100%
	}
</style>
