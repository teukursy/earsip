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
						<a href="<?php echo site_url('user/suratmasuk/add') ?>"><i class="fas fa-plus"></i> Add New</a>
					</div> <br>


					<div class="card-body">

						<div class="table-responsive">
							<table class="table table-hover" id="dataTable" width="100%" cellspacing="0" >
								<thead>
									<tr>
										<th>No. Berkas</th>
										<th>Alamat Pengirim</th>
										<th>Tanggal</th>
										<th>Perihal</th>
										<th>Berkas File</th>
										<th>Aksi</th>
									</tr>
								</thead>
								<tbody>
									<?php foreach ($suratmasuk as $surat_masuk) : ?>
										<tr>
											<td width="150">
											<?php echo $surat_masuk->noberkas ?>
											</td>
											<td>
												<?php echo $surat_masuk->alamatpengirim ?>
											</td>
											<td>
												<?php echo $surat_masuk->tanggalmasuk ?>
											</td>
											<td width="100">
												<?php echo $surat_masuk->perihalmasuk ?>
											</td>
											<td width="50">
												<a href="<?php echo site_url("user/suratmasuk/lihat/" . $surat_masuk->berkasmasuk) ?>" class="btn btn-small"><i class="fas fa-print"></i> Lihat Berkas</a>
											</td>
											<td>
												<a href="<?php echo site_url('user/suratmasuk/edit/' . $surat_masuk->nourut) ?>" class="btn btn-small"><i class="fas fa-edit"></i> Edit</a>
												<a onclick="deleteConfirm('<?php echo site_url('user/suratmasuk/delete/' . $surat_masuk->nourut) ?>')" href="#!" class="btn btn-small text-danger"><i class="fas fa-trash"></i> Hapus</a>
											</td>
										</tr>
									<?php endforeach; ?>
									<span style="float: right">
										<a href="<?php echo site_url("user/suratmasuk/report") ?>" class="btn btn-small" target="_blank"><i class="fas fa-print"></i> cetak tabel</a>
									</span>
								</tbody>
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
		function deleteConfirm(url) {
			$('#btn-delete').attr('href', url);
			$('#deleteModal').modal();
		}
	</script>
</body>

</html>