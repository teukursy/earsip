<!DOCTYPE html>
<html lang="en">

<head>
	<?php $this->load->view("user/_partials/head_demo.php") ?>
</head>

<body id="page-top">

	<?php $this->load->view("user/_partials/navbar_demo.php") ?>
	<div id="wrapper">

		<?php $this->load->view("user/_partials/sidebar.php") ?>

		<div id="content-wrapper">

			<div class="container-fluid">

				<?php $this->load->view("user/_partials/breadcrumb.php") ?>

				<!-- DataTables -->
				<div class="card mb-3">
					<div class="card-header">
						<a href="#" data-toggle="modal" data-target="#logoutModal"><i class="fas fa-plus"></i> Add New</a>
					</div>
					<div class="card-body">
				

						<div class="table-responsive">
							<table class="table table-hover" id="dataTable" width="100%" cellspacing="0">
								<thead>
									<tr>
										<th>NO</th>
										<th>NO Berkas</th>
										<th>Alamat Penerima</th>
										<th>Tanggal</th>
										<th>Perihal</th>
										<th>Berkas File</th>
										<th>Aksi</th>
									</tr>
								</thead>
							</table>
						</div>
					</div>
				</div>

			</div>
			<!-- /.container-fluid -->

			<!-- Sticky Footer -->
			<?php $this->load->view("user/_partials/footer_demo.php") ?>

		</div>
		<!-- /.content-wrapper -->

	</div>
	<!-- /#wrapper -->


	<?php $this->load->view("user/_partials/scrolltop.php") ?>
	<?php $this->load->view("user/_partials/modal.php") ?>

	<?php $this->load->view("user/_partials/js.php") ?>

	<script>
function deleteConfirm(url){
	$('#btn-delete').attr('href', url);
	$('#deleteModal').modal();
}
</script>
</body>

</html>